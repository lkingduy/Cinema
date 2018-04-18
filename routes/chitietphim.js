var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('chitietphim', { title: 'Express',name:'Duy',person:{name:'hi',age:'1'} });
// });
router.get('/:id', cinema.show);
module.exports = router;
