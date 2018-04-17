var phim = require("../models/cinemaModel");

module.exports = function(app){
    app.get("/api/setupPhim",function(req,res){
        //setup data

        var seedPhim = [
            {
                name: "Tom and Jerry",
            category: "phim hoat hinh",
            description: "phim tom va jerry",
            timePublish: "08-1990",
            image: "\public\images\tomandjerry.jpg",
            userCreated: "Duy"
            }
            
        ];
        console.log("abc");
        Todos.create(seedPhim,function (err,results){
            if(err){
                console.log(err);
            }
            res.send(results);
            
        });
    });
};