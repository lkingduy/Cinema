var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../api/models/user');

passport.use(new GoogleStrategy({
    clientID: "250546025812-2scf4sacfjnhrkt4oes29dq4mjk4b7bk.apps.googleusercontent.com",
    clientSecret: "uhENNUllLkw6yi2ocfnDyJMZ",
    callbackURL: "http://localhost:3000/auth/google/callbacks"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

module.exports = passport;