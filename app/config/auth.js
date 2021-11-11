const express = require("express");
const passport = require("passport");
const app = express.Router();
const guest = require("../http/middleware/guest");

const _getRedirectUrl = (req) => {
  return req.user.role === "admin" ? "/" : "/";
};

app.get(
  "/auth/google",
  guest,
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
///Callback route for google to redirect
app.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res, next) => {
    return res.redirect(_getRedirectUrl(req));
  }
);

module.exports = app;
