var express = require('express')
var router = express.Router()
var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");

router.get('/', function (req, res) {
    Cinema.find({}).exec(function (err, cinemas) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.send({ status: 200, cinemas: cinemas })
        }
      });
})

router.get('/:id', function (req, res) {
  Cinema.findById(req.params.id).exec(function (err, cinema) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.send({ status: 200, cinema : cinema })
      }
    });
})

module.exports = router