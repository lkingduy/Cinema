var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');
var user = require('../api/controller/signupController');
var userLogin = require('../api/controller/loginController');
// var csurf = require('csurf');
// var csurfProtection = csurf();
// router.use(csurfProtection);
// Get all employees
router.get('/', function(req, res) {
  console.log(req.session.name);
  cinema.list(req, res);
});

// router.get('/',function(req,res,next){
// res.render('/',{csurfToken: req.csrfToken()})
// });
// Create 
router.get('/create', function(req, res) {
  user.create(req, res);
});
// Save 
router.post('/save', function(req, res) {
  user.save(req, res);
});
router.post('/',function(req,res,next){
    console.log(req.body);
  });
router.post('/login',function(req,res,next){
  userLogin.login(req,res);
});
router.get('/logout',function(req,res){
  userLogin.logout(req,res);
});
/* GET users listing. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('user', { user: req.user });
});
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}  
module.exports = router;
