var mongoose = require("mongoose");
var config = require("../config");
mongoose.connect(config.getDbConnectionString());
console.log(config.getDbConnectionString());
require('../api/models/cinemaModel');
var Cinema = mongoose.model('Cinema');

var newFilm = new Cinema({
    name: "Tom and Jerry",
            category: "phim hoat hinh",
            description: "phim tom and jerry",
            timePublish: "09-1880",
            image: "/images/anhvaem.jpg",
            userCreated: "LucDuy"
})

 newFilm.save(err => {
     console.log(err);
     
 })