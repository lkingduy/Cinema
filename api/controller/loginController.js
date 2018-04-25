var mongoose = require("mongoose");
var User = require('./../models/userModel')
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
          console.log("logged in");
          req.session.name = user.name;
          req.session.id = user._id;
          console.log(req.session.name);
          res.redirect('/');
        }
        else {
          alert('Mật khẩu sai');
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