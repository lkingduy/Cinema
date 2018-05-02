var mongoose = require("mongoose");
var User = require('./../models/userModel')
var Cinema = require('./../models/cinemaModel')
mongoose.model("User");
var loginController = {};
var bcrypt = require('bcryptjs');
var constants = require('../../config/constants')
var count = 0;

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
  
  User.find({}).exec(function(err,users){
    if(err){
      console.log(err);
      res.redirect("../views/error");
    }
    for(var i = 0; i<users.length;i++){
      if(users[i].email == req.body.email && users[i].password == req.body.password){
        req.session.name = [users.name,users.avatar];
        count = 1;
        res.send({ users:users, name: req.session.name, successMessage: 'Đăng nhập thành công!!' });       
      }
    }
    if(count == 0){
      console.log("Mat khau hoac email cua user bi sai!!!")
      return res.send({ status: 403, errorMessage: 'Mat khau hoac email cua user bi sai!!!!!' })
    }                                      
  }) 
  
};
loginController.logout = function(req,res){
  if(req.session){
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        count = 0;
        return res.redirect('/');
      }
    });
  }
}
module.exports = loginController;