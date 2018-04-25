var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');
var profile = require('../api/controller/filmController');
var updateFilm = require('../api/controller/updateFilmController');

  router.get('/', function(req, res) {
    profile.list(req,res);
  });
  
  // router.post('/delete/:id',function(req,res){
  //   profile.delete(req,res);
  // });
  router.get('/delete/:id',function(req,res){
    profile.delete(req,res);
  });
  router.post('/save',function(req,res){
    updateFilm.update(req,res);
  });
module.exports = router;