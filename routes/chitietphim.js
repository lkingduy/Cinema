var express = require('express');
var router = express.Router();
var updateCinema = require('../api/controller/updateFilmController');
var cinema = require('../api/controller/cinemaController');
/* GET home page. */

// router.get('/:id', cinema.show);
router.post('/save',function(req,res){
    updateCinema.update(req,res);
});
module.exports = router;
