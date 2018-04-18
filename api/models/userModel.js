var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    name: String
});
var user = mongoose.model("User",userSchema);
module.exports = user;