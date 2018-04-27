
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var cinemaSchema = new Schema({
    name: String,
    category: String,
    description: String,
    timePublish: String,
    image: String,
    userCreated: {
        type: String,
        default: ''
    },
    userID:String,
});

var phim = mongoose.model("Cinema", cinemaSchema);

module.exports = phim;
 
