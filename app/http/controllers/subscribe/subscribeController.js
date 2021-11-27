const Subscriber = require("../../../models/subscriber");
const sgMail = require("@sendgrid/mail");
const API = sgMail.setApiKey(process.env.MAIL_KEY);

//FACTORY FUNCTION USED TO CREATE OBJECT
function subscribeController() {
  return {
    async subscribe(req, res) {
      const { email } = req.body;

      //CREATING USER IN DB
      const subscriber = new Subscriber({
        email,
      });

      await subscriber
        .save()
        .then(() => {
          let success = "<span>Thanks for subscribing!🤌🏻</span>";
          return res.json({ success });
        })
        .catch((err) => {
          let success = "<span>You've already subscribed!👌🏻</span>";
          return res.json({ success });
        });
    },
    async newsletter(req, res) {
      Subscriber.find({}, function (err, results) {
        if (err) {
        } else {
          results.forEach(async function (result) {
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
                },
              ],
            };

            await sgMail
              .send(Message)
              .then((response) => console.log("Email Sent..."))
              .catch((error) => console.log(error.Message));
          });
        }
        return res.redirect("/admin/home");
      });
    },
  };
}
module.exports = subscribeController;