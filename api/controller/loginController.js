var mongoose = require("mongoose");
var User = require('./../models/userModel')
var Cinema = require('./../models/cinemaModel')
mongoose.model("User");
var loginController = {};
var bcrypt = require('bcryptjs');
var constants = require('../../config/constants')

// loginController.
//hashing a password before saving it to the database
// userSchema.pre('save', function (req,res,next) {
//     var user = this;
//     bcrypt.hash(user.password, 10, function (err, hash){
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//       res.redirect('/');
//     })
//   });
loginController.login = function(req,res){
  User.findOne({email : req.body.email}).exec(function(err,user){
    if(err){
      console.log(err);
      res.redirect("../views/error");
    }
    else{
        if(user.password == req.body.password){
          Cinema.find({}).exec(function(err,cinema){
            console.log("logged in");
            req.session.name = user.name;
            console.log(req.session.name);
            console.log(user.avatar);
            console.log(req.session.avatar);
            var jsonUser = JSON.parse('{ "name": req.session.name,"avatar": user.avatar  }')
            res.render("../views/trangchu",{jsonUser:jsonUser,cinema: cinema,name: req.session.name});
            // res.redirect('/');
          })
          
        }
        else {
          
        }                             
    }
  }) 
  
};
loginController.logout = function(req,res){
  if(req.session){
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        return res.redirect('/');
      }
    });
  }
}
module.exports = loginController;