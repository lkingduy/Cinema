var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');
var user = require('../api/controller/signupController');
var userLogin = require('../api/controller/loginController');
var film = require('../api/controller/filmController');
var updateFilm = require('../api/controller/updateFilmController');
var profile = require('../api/controller/profileController');

router.get('/', function(req, res) {
  console.log(req.session.name);
  cinema.list(req, res);
});
router.get('/cinema/:id', cinema.show);
 // Create 
 router.get('/film/create', function(req, res) {
  cinema.create(req, res);
});
router.get('/user/create', function(req, res) {
  user.create(req, res);
});
// Save 
router.post('/save', function(req, res,next) {
  user.save(req, res);
});

router.get('/updateFilm/:id',function(req,res){
  updateFilm.show(req,res);
});
router.get('/profile', function(req, res) {
  profile.list(req,res);
});
router.post('/login',function(req,res,next){
  userLogin.login(req,res);
});
router.get('/logout',function(req,res){
  userLogin.logout(req,res);
});
router.get('/filmProfile', function(req, res) {
  film.list(req, res);
});
router.post('/filmProfile/save', function(req, res) {
  updateFilm.update(req,res);
});
router.get('filmProfile/delete/:id',function(req,res){
  film.delete(req,res);
});
router.get('/changePassword', function(req, res) {
  profile.listPass(req,res);
});
router.post('/savePassword', function(req, res) {
  profile.updatePass(req,res);
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
