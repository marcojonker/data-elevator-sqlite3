var environment = process.env.NODE_ENV ? process.env.NODE_ENV : "developent";

var config = {
    levelControllerConfig : {
       tableName: "_data_elevator",
       fileName: null
    }
}

switch(environment) {
    case "development":
        break;
}

module.exports = config;