var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trangchu', { title: 'Express',name:'Duy',person:{name:'hi',age:'1'} });
});
module.exports = router;
