var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var User = mongoose.model("User");
var profileController = {};

//add show list film
profileController.list = function(req,res){
    User.findOne({'name': req.session.name}).exec(function (err, users) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("../views/profile", {users: users,name : req.session.name});
        }
      });
}
profileController.update = function(req, res) {
  User.findByIdAndUpdate(req.body.id, { $set: {name : req.body.name,avatar:"/images/" + req.body.avatar,phone: req.body.phone}}, { new: true }, function (err,users) {
    if (err) {
      console.log(err);
      res.render("../views/trangchu", {users: req.body});
    }
    if(users.avatar == ""){
      users.avatar = req.body.avatar;
    }
    req.session.name = users.name;
    console.log(users);
    res.render("../views/profile" ,{users:users,name:req.session.name});
  });
};


module.exports = profileController;