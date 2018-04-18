var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.getDbConnectionString());
console.log(config.getDbConnectionString());
require('../api/models/userModel');
var User = mongoose.model('User');

var newUser = [new User({
    email: "duy3@gmail.com",
    password: "qazqaz",
    name: "Duy3"
}),
        new User({
            email: "mama3@gmail.com",
    password: "qazqaz",
    name: "Mama2"
        })
];
for(var i= 0;i <newUser.length;i++){
    newUser[i].save(err =>{
        console.log(err);
    })
}
