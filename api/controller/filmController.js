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

  filmController.delete = function(req, res) {
    Cinema.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Film deleted!");
        res.redirect("/filmProfile");
      }
    });
  };
  // filmController.update = function(req,res){
  //     Cinema.findOne({'id': req.params.id}).exec(function (err, cinema) {
  //       var a = req.params.id;
  //         if (err) {
  //           console.log("Error:", err);
  //         }
  //         else {
  //           console.log(a);
  //           res.render("../views/chitietphim/:a", {cinema: cinema,name : req.session.name});
  //         }
  //       });
  
  // }
  module.exports = filmController;