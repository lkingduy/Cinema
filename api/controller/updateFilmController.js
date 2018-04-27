var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var User = mongoose.model("User");
var updateFilmController = {};

//film Profile
updateFilmController.show = function (req, res) {
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


updateFilmController.update = function (req, res) {
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
module.exports = updateFilmController;