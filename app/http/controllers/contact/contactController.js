const Contact = require("../../../models/contact");
const moment = require("moment");

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
