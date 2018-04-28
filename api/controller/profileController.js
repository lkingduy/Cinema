var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var User = mongoose.model("User");
var bcrypt = require('bcryptjs');
var passport = require('passport');
var profileController = {};


profileController.list = function(req,res){
    User.findOne({'name': req.session.name[0]}).exec(function (err, users) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("../views/profile", {users: users,name : req.session.name});
        }
      });
}
profileController.listPass = function(req,res){
  User.findOne({'name': req.session.name[0]}).exec(function (err, users) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/changePassword", {users: users,name : req.session.name});
      }
    });
}
profileController.update = function(req, res) {
  if (!req.files)
  return res.status(400).send('No files were uploaded.');

// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
let sampleFile = req.files.avatar;
console.log(sampleFile + "ahihihi");
if(sampleFile == undefined){
  User.findByIdAndUpdate(req.body.id, { $set: {name : req.body.name,phone: req.body.phone}}, { new: true }, function (err,users) {
    if (err) {
      console.log(err);
      res.render("../views/trangchu", {users: req.body});
    }    
    req.session.name[0] = users.name;
    console.log(users);
    res.render("../views/profile" ,{users:users,name:req.session.name});
  });
}
else {
  var imgEnd = sampleFile.name.split('.').pop();

  var imgName = Date.now() + '.' + imgEnd ;
// Use the mv() method to place the file somewhere on your server
sampleFile.mv(__dirname +'/../../public/images/' + imgName, function(err) {
  if (err)
    return res.status(500).send(err);
});
  
  User.findByIdAndUpdate(req.body.id, { $set: {name : req.body.name,avatar:"/images/" + imgName,phone: req.body.phone}}, { new: true }, function (err,users) {
    if (err) {
      console.log(err);
      res.render("../views/trangchu", {users: req.body});
    }
    
    req.session.name[0] = users.name;
    req.session.name[1] = users.avatar;
    console.log(users);
    res.render("../views/profile" ,{users:users,name:req.session.name});
  });
}

};
profileController.updatePass = function(req, res) {
  // var salt = bcrypt.genSaltSync(10);
  // var hash = bcrypt.hashSync('s0/\/\P4$$w0rD', salt);
  // req.body.password = hash;
  User.findById(req.body.id,function(err,user){
    console.log("chay vao day");
    if (err) {
      console.log(err);
      return res.redirect("../views/error");
    }
    else if(user.password != req.body.checkPassword){
      console.log("Mat khau cua user bi sai!!!")
      return res.send({ status: 403, errorMessage: 'Mat khau cua user bi sai!!!!!' })
    }
    else {
      User.findByIdAndUpdate(req.body.id, { $set: {name : req.body.name,phone: req.body.phone,password: req.body.password}}, { new: true }, function (err,users) {
    
        console.log(users.password);
        if (err) {
          
          console.log(err);
          res.render("../views/trangchu");
        }
        console.log("abc");
        req.session.name[0] = users.name;
      
        res.send({ users:users, name: req.session.name, successMessage: 'Sua mat khau thanh cong!!' });
      });
    }
  })

};


module.exports = profileController;