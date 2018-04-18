var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var cinemaController = {};

//add show list film
cinemaController.list = function(req,res){
    Cinema.find({}).exec(function (err, cinemas) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("../views/trangchu", {cinemas: cinemas});
        }
      });
}
//show single by id
cinemaController.show = function(req, res) {
    Cinema.findOne({_id: req.params.id}).exec(function (err, cinema) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("chitietphim", {cinema: cinema});
      }
    });
  };
//add film -> create page
cinemaController.create = function(req, res) {
    res.render("taophim");
  };
//add save new film
cinemaController.save = function(req, res) {
    var cinema = new Cinema(req.body);
    cinema.image = "/images/"+ cinema.image; 
    cinema.save(function(err) {
      if(err) {
        console.log(err);
        res.render("trangchu");
      } else {
        console.log("Successfully created an film.");
        // res.redirect("/trangchu"+cinema._id);
        res.redirect("/");
      }
    });
  };
//edit by id
// cinemaController.edit = function(req, res) {
//     Cinema.findOne({_id: req.params.id}).exec(function (err, cinema) {
//       if (err) {
//         console.log("Error:", err);
//       }
//       else {
//         res.render("../views/trangchu", {cinema: cinema});
//       }
//     });
//   };  
  //add update 
//   cinemaController.update = function(req, res) {
//     Cinema.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, category: req.body.category, description: req.body.description,timePublish: Date.now,image : req.body.image,userCreated : req.body.userCreated}}, { new: true }, function (err, cinema) {
//       if (err) {
//         console.log(err);
//         res.render("../views/edit", {cinema: req.body});
//       }
//       res.redirect("/views/trangchu"+employee._id);
//     });
//   };

module.exports = cinemaController;