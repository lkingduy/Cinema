var configValues = require("./config");
module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configValues.username}:${configValues.password}@ds145178.mlab.com:45178/duycinema`;
    }
}