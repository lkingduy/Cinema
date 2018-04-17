var express = require('express');
var router = express.Router();
var cinema = require('../api/controller/cinemaController');

// Get all employees
router.get('/', function(req, res) {
  cinema.list(req, res);
});

module.exports = router;