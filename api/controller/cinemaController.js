var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var User = require('./../models/userModel')
var cinemaController = {};

//add show list film
cinemaController.list = function (req, res) {
  Cinema.find({}).exec(function (err, cinemas) {
    if (err) {
      console.log("Error:", err);
    }

    else {
      
      res.render("../views/trangchu", { cinemas: cinemas, name: req.session.name});
    }
  });
}

//show single by id
cinemaController.show = function (req, res) {
  console.log(req.params.id);
  res.render("../views/chitietphim", { cinemaId: req.params.id, name: req.session.name });
};
//add film -> create page
cinemaController.create = function (req, res) {
  if (req.session.name[0] == null) {
    res.redirect('/');
  }
  res.render("taophim", { name: req.session.name });
};
//add save new film
cinemaController.save = function (req, res) {
  // var month = document.getElementById("film-month");
  // var year = document.getElementById("film-year");
  // var filmCategory = document.getElementById("film-category");

  console.log(req.body);
  console.log(req.files);
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.image;

  var imgEnd = sampleFile.name.split('.').pop();
  var imgName = Date.now() + '.' + imgEnd;
  console.log(sampleFile);
  console.log(__dirname);
  // Use the mv() method to place the file somewhere on your server


  sampleFile.mv(__dirname + '/../../public/images/homeshow/' + imgName, function (err) {
    if (err)
      // return res.status(500).send(err);
      res.send({ errorMessage: 'Require image' })
  });

  console.log(sampleFile.name);
  console.log(req.body);
  var cinema = new Cinema(req.body);
  cinema.image = "/images/homeshow/" + imgName;
  // cinema.category = filmCategory.value;
  cinema.timePublish = Date.now();
  cinema.userCreated = req.session.name[0];
  cinema.save(function (err) {
    if (err) {
      console.log(err);

    } else {
      console.log("Successfully created an film.");
      // res.redirect("/trangchu"+cinema._id);
      res.send({ status: 200 })
    }
  });
};
//edit by id
cinemaController.edit = function (req, res) {
  Cinema.findOne({ _id: req.params.id }).exec(function (err, cinema) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/trangchu", { cinema: cinema });
    }
  });
};
//add update 
cinemaController.update = function (req, res) {
  Cinema.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, category: req.body.category, description: req.body.description, timePublish: Date.now, image: req.body.image, userCreated: req.body.userCreated } }, { new: true }, function (err, cinema) {
    if (err) {
      console.log(err);
      res.render("../views/edit", { cinema: req.body });
    }
    res.redirect("/" + employee._id);
  });
};
//delete
cinemaController.delete = function (req, res) {
  Cinema.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Film deleted!");
      res.redirect("/filmProfile");
    }
  });
};
//delete film
cinemaController.deleteFilm = function(req, res) {
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
//film Profile
cinemaController.listFilm = function(req,res){
  Cinema.find({'userCreated':req.session.name[0]}).exec(function (err, cinemas) {
      
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/filmProfile", {cinemas: cinemas,name : req.session.name});
      }
    });
}
//update film Profile
cinemaController.showFilm = function (req, res) {
  Cinema.findOne({ _id: req.params.id }).exec(function (err, cinema) {

    if (err) {
      console.log("Error:", err);
    }
    else {
      console.log(cinema.category);
      res.render("../views/updateFilm", { cinema: cinema, name: req.session.name });
    }
  });
}
//update phim
cinemaController.updateFilm = function (req, res) {
  console.log(req.body);
  console.log(req.files);
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.image;

  var imgEnd = sampleFile.name.split('.').pop();
  var imgName = Date.now() + '.' + imgEnd;
  console.log(sampleFile);
  console.log(__dirname);
  // Use the mv() method to place the file somewhere on your server


  sampleFile.mv(__dirname + '/../../public/images/homeshow/' + imgName, function (err) {
    if (err)
      return res.status(500).send(err);
  });

  console.log(req.body);
  req.body.image = imgName;
  Cinema.findByIdAndUpdate(req.body.id, { $set: { id: req.body.id, name: req.body.name, image: "/images/homeshow/" + req.body.image, description: req.body.description.trim() } }, { new: true }, function (err, cinema) {
    if (err) {
      console.log("abc");
      console.log(err);
      console.log(cinema);
      res.render("../views/trangchu");
    }
    console.log("xyz");
    res.redirect("/cinema/" + req.body.id);
  });
}

module.exports = cinemaController;

