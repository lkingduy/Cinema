var mongoose = require("mongoose");
var User = mongoose.model("User");
var Cinema = mongoose.model("Cinema");
var signupController = {};
var bcrypt = require('bcryptjs');
var passport = require('passport');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
//add user 
// signupController.create = function(req, res) {
//     res.render("/");
//   };
//add save new user
signupController.save = function (req, res) {
  var user = new User(req.body);
  req.checkBody('name', "Name is required!!").notEmpty();
  req.checkBody('email', "Email is required!!").notEmpty();
  req.checkBody('email', "Email is not valid!!").isEmail();
  req.checkBody('password', "Password is required!!").notEmpty();
  req.checkBody('repassword', "Password doesn't not match!!").notEmpty();
  
  
  User.findOne({ email: req.body.email }, function (err, userExist) {
    if (err) {
      console.log(err);
      return res.redirect("../views/error");
    }
    console.log(userExist);
    
    if (userExist) {
      console.log("Email is existed!!");
      return res.send({ status: 403, errorMessage: 'User existed' })
    }
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync('s0/\/\P4$$w0rD', salt);
    user.password = hash;
    req.session.name = user.name;
    user.avatar = "/images/homeshow/profile.jpg";
    user.phone = "";
    user.save(function (err, cinemas) {
      if (err) {
        console.log(err);
        res.redirect("../views/error.ejs");
      } else {
        console.log("Successfully created an user.");
        console.log(cinemas);
        
        // res.redirect("/trangchu"+cinema._id);
        console.log(req.session.name);
        res.send({ cinemas: cinemas, name: req.session.name });
      }
    });
  });
  var errors = req.validationErrors();
  if (errors) {
    res.redirect('/', { errors: errors });
  }
  else {
    console.log('GOOD');
  }

  console.log(req.body.email);

};
module.exports = signupController;