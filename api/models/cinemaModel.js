
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var cinemaSchema = new Schema({
    name: String,
    category: String,
    description: String,
    timePublish: String,
    image: String,
    userCreated: String
});

var phim = mongoose.model("phim", cinemaSchema);

module.exports = phim;
 
