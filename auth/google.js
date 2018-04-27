var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../api/models/userModel');

passport.use(new GoogleStrategy({
    clientID: "250546025812-2scf4sacfjnhrkt4oes29dq4mjk4b7bk.apps.googleusercontent.com",
    clientSecret: "uhENNUllLkw6yi2ocfnDyJMZ",
    callbackURL: "http://localhost:3000/auth/google/callbacks"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
       User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id,email: profile.emails[0].value }, function (err, user,req) {
         
        return done(err, user);
       });
  }
));

module.exports = passport;