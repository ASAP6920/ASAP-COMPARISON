
const User = require("../models/user");
const bcrypt = require("bcrypt");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ;
const crypto = require('crypto')


function googleInit(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BASE_URL}/auth/google/redirect`,
      },
       async (accessToken, refreshToken, profile, done) => {

        let password = crypto.randomBytes(32).toString('hex');
        const hashPassword = await bcrypt.hash(password, 10);

        // console.log(profile);
        const user = await User.findOne({ email: profile._json.email })
          if (user) {
            // console.log("user is: ", user);
            done(null, user);
          } else {
            new User({
              fname: profile._json.given_name,
              lname: profile._json.family_name,
              email: profile._json.email,
              password: hashPassword,
            })
              .save()
              .then((newUser) => {
                done(null, newUser);
              });
          }
        }
        ));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      done(null, user);
    });
  });
}

module.exports = googleInit;