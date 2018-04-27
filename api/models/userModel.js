const { checkSchema } = require('express-validator/check');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var constant = require('../../config/constants')
var findOrCreate = require('mongoose-findorcreate')

var userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        trim: true
    },
    password:{
        type: String
    },
    name: String,
    avatar: {
        type: String
    },
    phone: {
       type: String,
       default: ""
    },
    provider:{
        type: String,
        enum: constant.jsonProviderArray,
        default: constant.jsonProvider.local
    },
    userid: String,
    updated_at: { type: Date, default: Date.now }
});
userSchema.plugin(findOrCreate);
// userSchema.statics.findOrCreate = require("find-or-create");
var user = mongoose.model("User",userSchema);
module.exports = user;