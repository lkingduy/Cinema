var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');
var profile = require('../api/controller/profileController');


  router.get('/', function(req, res) {
    profile.list(req,res);
  });
  router.post('/saveProfile',function(req,res,next){
    profile.update(req,res);
  });
module.exports = router;
