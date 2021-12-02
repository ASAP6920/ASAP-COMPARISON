const Subscriber = require("../../../models/subscriber");
const sgMail = require("@sendgrid/mail");
const API = sgMail.setApiKey(process.env.MAIL_KEY);
const bcrypt = require("bcrypt");

//FACTORY FUNCTION USED TO CREATE OBJECT
function subscribeController() {
  return {
    async subscribe(req, res) {
      const { subscribeEmail } = req.body;
      // console.log(req.body);
      //CREATING USER IN DB
      const subscriber = new Subscriber({
        email:subscribeEmail,
      });

      await subscriber
        .save()
        .then(() => {
          let success = "<span>Thanks for subscribing! 🤌🏻</span>";
          return res.json({ success });
        })
        .catch((err) => {
          let success = "<span>You've already subscribed!👌🏻</span>";
          return res.json({ success });
        });
    },
    async index(req, res){
      return res.render("admin/newsPass");
    },

    async newsletter(req, res) {

      const{pass} = req.body

      if(!pass){
        req.flash("error", "Please enter a password!");
        return res.redirect("/admin/newsletter");
      }

      const match = await bcrypt.compare(pass, req.user.password);

      if(!match){
          req.flash("error", "Invalid password");
          return res.redirect("/admin/newsletter");
      }else{
        Subscriber.find({}, function (err, results) {
          if (err) {
          } else {
            results.forEach(async function (result) {
              const unsubscribeLink = `${process.env.BASE_URL}/unsubscribe/${result._id}`;
              // console.log(result.email);
              const Message = {
                from: {
                  name: "ASAP",
                  email: process.env.MAIL_EMAIL,
                },
                replyTo: process.env.MAIL_EMAIL,
                templateId: process.env.MAIL_TEMPLATE_ID,
                personalizations: [
                  {
                    to: result.email,
                    dynamicTemplateData:{
                      unsubscribe: unsubscribeLink
                    }
                  },
                ],
              };

              await sgMail
                .send(Message)
                .then((response) => console.log("Email sent..."))
                .catch((error) => console.log(error.Message));
            });
          }
          req.flash("error", "Newsletter sent successfully");
          return res.redirect("/admin/newsletter");
        });
      }
    },
  };
}
module.exports = subscribeController;
