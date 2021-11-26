const User = require("../../models/user");
const Token = require("../../models/token");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");
const passport = require("passport");
const API = sgMail.setApiKey(process.env.MAIL_KEY);
const crypto = require('crypto')

function authController() {
  const _getRedirectUrl = (req) => {
    return req.user.role === "admin" ? "/admin/home" : "/";
  };

  return {
    reset(req, res) {
      res.render("auth/reset");
    },
    async postReset(req, res) {
      const { email } = req.body;
      // console.log(req.body);
      const user = await User.findOne({ email: email });
      if (!user) {
        req.flash("error", "Invalid email address");
        return res.redirect("/reset");
      }
      let token = await Token.findOne({ userId: user._id });

      if (!token) {
        token = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
      }

      const link = `${process.env.BASE_URL}/reset-password/${token.token}/${user._id}`;
      console.log(link);

      const Message = {
        to: [user.email],
        from: {
          name: "ASAP",
          email: process.env.MAIL_EMAIL,
        },
        subject: "Please reset your password",
        html: `<h3>Dear ${user.fname},</h3> 
               <h5>Please click the link below to finish resetting your password:</h5>
               <p>${link}</p>`,
      };
      
      await sgMail
        .send(Message)
        .then((response) => console.log("Email Sent..."))
        .catch((error) => console.log(error.Message));

        req.flash("error", "Email for password reset has been sent!");
      return res.redirect("/reset");
    },

    async beforeReset(req, res) {
      // console.log(req.params);

      const user = await User.findById({ _id: req.params.id });
      // console.log(user);
      if (!user) {
        req.flash("error", "Invalid link or expired");
        return res.redirect("/reset");
      }

      const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
      });

      if (!token) {
        req.flash("error", "Invalid link or expired");
        return res.redirect("/reset");
      }

      return res.render("auth/password");
    },

    async afterReset(req, res) {
      // console.log(req.params);
      const user = await User.findById({ _id: req.params.id });
      // console.log(user);
      if (!user) {
        req.flash("error", "Invalid link or expired");
        return res.redirect("/reset");
      }

      const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
      });

      if (!token) {
        req.flash("error", "Invalid link or expired");
        return res.redirect("/reset");
      }

      let password = req.body.password;
      const hashPassword = await bcrypt.hash(password, 10);

      const user1 = {
        password: hashPassword,
      };

      await User.findByIdAndUpdate({ _id: req.params.id }, user1)
        .then((user1) => {
          return res.redirect("/");
        })
        .catch((error) => {
          req.flash("error", "Error updating database");
          return res.redirect("/");
        });

      await token.delete();
    },

    login(req, res) {
      res.render("auth/login");
    },

    postLogin(req, res, next) {
      const { email, password } = req.body;

      //VALIDATING REQUESTS
      if (!email || !password) {
        req.flash("error", "All fields are required");
        return res.redirect("/login");
      }
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          req.flash("error", info.message);
          return next(err);
        }
        if (!user) {
          req.flash("error", info.message);
          return res.redirect("/login");
        }
        req.logIn(user, (err) => {
          if (err) {
            req.flash("error", info.message);
            return next(err);
          }
          return res.redirect(_getRedirectUrl(req));
        });
      })(req, res, next);
    },
    register(req, res) {
      res.render("auth/register");
    },
    async postRegister(req, res) {
      const { fname, lname, email, password } = req.body;
      // console.log(req.body);

      //VALIDATING REQUESTS
      if (!fname || !lname || !email || !password) {
        req.flash("error", "All fields are required");
        req.flash("fname", fname);
        req.flash("lname", lname);
        req.flash("email", email);
        return res.redirect("/register");
      }

      User.exists({ email: email }, (err, result) => {
        if (result) {
          req.flash("error", "Email already exist");
          req.flash("fname", fname);
          req.flash("lname", lname);
          req.flash("email", email);
          return res.redirect("/register");
        }
      });

      //HASHING PASSWORD
      const hashPassword = await bcrypt.hash(password, 10);

      //CREATING USER IN DB
      const user = new User({
        fname,
        lname,
        email,
        password: hashPassword,
        image: "/img/profile/customer.jpg"
      });

      user
        .save()
        .then(() => {
          return res.redirect("/login");
        })
        .catch((err) => {
          req.flash("error", "Something went wrong");
          return res.redirect("/register");
        });
    },

    logout(req, res) {
      req.logout();
      return res.redirect("/login");
    },
  };
}

module.exports = authController;
