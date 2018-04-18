var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../api/models/user');

passport.use(new FacebookStrategy({
    clientID: "1644435912319238",
    clientSecret: "730ebb9c63198556091f8cbc6fad7f4d",
    callbackURL: "localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;