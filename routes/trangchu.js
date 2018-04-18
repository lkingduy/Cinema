var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');
var user = require('../api/controller/signupController');
// var csurf = require('csurf');
// var csurfProtection = csurf();
// router.use(csurfProtection);
// Get all employees
router.get('/', function(req, res) {
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
module.exports = router;
