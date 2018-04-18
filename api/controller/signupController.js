var mongoose = require("mongoose");
var User = require('./../models/userModel')
mongoose.model("User");
var signupController = {};
var bcrypt = require('bcryptjs');
//add user 
signupController.create = function(req, res) {
    res.render("/");
  };
//add save new user
signupController.save = function(req, res) {
    var user = new User(req.body); 
    var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync('s0/\/\P4$$w0rD', salt);
  user.password = hash;
    user.save(function(err) {
      if(err) {
        console.log(err);
        res.redirect("../views/error.ejs");
      } else {
        console.log("Successfully created an user.");
        // res.redirect("/trangchu"+cinema._id);
        res.redirect("/");
      }
    });
  };
  module.exports = signupController;