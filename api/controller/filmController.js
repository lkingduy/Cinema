var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var User = mongoose.model("User");
var filmController = {};

//film Profile
filmController.list = function(req,res){
    Cinema.find({'userCreated':req.session.name}).exec(function (err, cinemas) {
        
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("../views/filmProfile", {cinemas: cinemas,name : req.session.name});
        }
      });
  }
  module.exports = filmController;