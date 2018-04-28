var express = require('express');
var router = express.Router();
var updateCinema = require('../controller/updateFilmController');
var cinema = require('../controller/cinemaController');
/* GET home page. */
router.post('/save',function(req,res){
    updateCinema.update(req,res);
});
module.exports = router;
