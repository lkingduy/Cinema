var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('taophim', { title: 'Express',name:'Duy',person:{name:'hi',age:'1'} });
});
router.get('/trangchu', function (req, res,html) {
  res.sendFile(path.join(__dirname+'/trangchu.ejs'));
 });
router.post('/',function(req,res,next){
    console.log(req.body);
    
  });
module.exports = router;
