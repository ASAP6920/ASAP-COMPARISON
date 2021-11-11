const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcrypt");
function init(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        //CHECK IF EMAIL EXISTS
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User does not exist" });
        }

        bcrypt
          .compare(password, user.password)
          .then((match) => {
            if (match) {
              return done(null, user, { message: "Logged in successfully" });
            }
            return done(null, false, { message: "Invalid credentials" });
          })
          .catch((err) => {
            return done(null, false, { message: "Something went wrong" });
          });
      }
    )
  );

  //WHAT TO STORE IN SESSION
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  //GET THE STORED DATA FROM SESSION
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}
module.exports = init;
