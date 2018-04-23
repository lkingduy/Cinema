var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');
var user = require('../api/controller/signupController');
var userLogin = require('../api/controller/loginController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('taophim', { title: 'Express' });
});
router.get('/trangchu', function (req, res,html) {
  res.sendFile(path.join(__dirname+'/trangchu.ejs'));
 });
 // Create 
router.get('/create', function(req, res) {
  cinema.create(req, res);
});
// Save 
router.post('/save', function(req, res) {
  cinema.save(req, res);
});
router.post('/',function(req,res,next){
    console.log(req.body);
    
  });
module.exports = router;
