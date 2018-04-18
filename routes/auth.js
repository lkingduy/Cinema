var express = require('express');
var router = express.Router();
var passportFacebook = require('../auth/facebook');

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Please Sign In with:' });
  });

  /* LOGOUT ROUTER */
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  /* FACEBOOK ROUTER */
router.get('/facebook',
passportFacebook.authenticate('facebook'));

router.get('/facebook/callback',
passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});
module.exports = router;