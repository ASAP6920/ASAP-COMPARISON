const Contact = require("../../../models/contact");
const moment = require("moment");
const sgMail = require("@sendgrid/mail");
const API = sgMail.setApiKey(process.env.MAIL_KEY);

//FACTORY FUNCTION USED TO CREATE OBJECT
function contactController() {
  return {
    async index(req, res) {
      return res.render("contact", {title: "Contact us"})
    },
    async add(req, res) {
        const { name, email1, query } = req.body;
      // console.log(req.body);

      //VALIDATING REQUESTS
      if (!name || !email1 || !query) {
        req.flash("error", "All fields are required");
        return res.redirect("/contactUs");
      }
 

      //CREATING USER IN DB
      const contact = new Contact({
        name: name,
        email: email1,
        query:query
      })

      // console.log(contact)

      contact.save().then(() => {
        req.flash("error", "We'll contact you ASAP.");
             
      const user_Message = {
        from: {
          name: "ASAP",
          email: process.env.MAIL_EMAIL,
        },
        replyTo: process.env.CONTACT_EMAIL,
        templateId: process.env.CONTACT_RESPONSE_TEMPLATE_ID,
        personalizations: [
          {
            to: email1,
            dynamicTemplateData:{
              greetings:`Hi ${name}`,
            }
          },
        ],
      };
      
      sgMail.send(user_Message)
        .then((response) => console.log("Email Sent..."))
        .catch((error) => console.log(error.Message));

      const admin_Message = {
        from: {
          name: "ASAP",
          email: process.env.MAIL_EMAIL,
        },
        templateId: process.env.ADMIN_RECEIVED_TEMPLATE_ID,
        personalizations: [
          {
            to: process.env.CONTACT_EMAIL,
            dynamicTemplateData:{
              greetings:`Hey`,
              email: email1, 
              name: name,
              query: query
            }
          },
        ],
      };
      
sgMail.send(admin_Message)
        .then((response) => console.log("Email Sent..."))
        .catch((error) => console.log(error.Message));
        return res.redirect("/contactUs");
        })
        .catch((err) => {
          req.flash("error", "Something went wrong");
          return res.redirect("/contactUs");
        });
      },
      async show(req, res) {
        const contacts = await Contact.find().sort({ 'createdAt': -1 });
        // console.log(contacts);
        return res.render("admin/contactTable", {
          contacts: contacts,
          moment: moment,
          title: "Users query",
        });
      },
  };
}
module.exports = contactController;
