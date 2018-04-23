var express = require('express');
var router = express.Router();
// var cinema = require('../api/controller/cinemaController');
var profile = require('../api/controller/filmController');


  router.get('/', function(req, res) {
    profile.list(req,res);
  });

module.exports = router;