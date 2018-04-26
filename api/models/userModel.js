const { checkSchema } = require('express-validator/check');
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
    name: String,
    avatar: {
        type: String,
        default: "/images/avatar.png"
    },
    phone: {
       type: String,
       default: ""
    }
});
userSchema.statics.findOrCreate = require("find-or-create");
var user = mongoose.model("User",userSchema);
module.exports = user;