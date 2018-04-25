var mongoose = require("mongoose");
var config = require("../config");
mongoose.connect(config.getDbConnectionString());
console.log(config.getDbConnectionString());
require('../api/models/cinemaModel');
var Cinema = mongoose.model('Cinema');

var newFilm = [new Cinema({
    name: "Náo loạn",
            category: "phim hoat hinh",
            description: "phim tom and jerry",
            timePublish: "09-1880",
            image: "/images/homeshow/naoloan.jpg",
            userCreated: "Duy"
}),new Cinema({
    name: "Nhật nguyệt truyền kỳ",
            category: "phim hoat hinh",
            description: "phim tom and jerry",
            timePublish: "09-1880",
            image: "/images/homeshow/nhatnguyettruyenky.jpg",
            userCreated: "Duy"
}),new Cinema({
    name: "Phi hổ chi tiềm hạn",
            category: "phim hoat hinh",
            description: "phim tom and jerry",
            timePublish: "09-1880",
            image: "/images/homeshow/phihochitiemhanh.jpg",
            userCreated: "Duy"
})];

for(var i= 0;i <newFilm.length;i++){
    newFilm[i].save(err =>{
        console.log(err);
    })
}