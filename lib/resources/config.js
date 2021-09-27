/* eslint-disable no-undef */
var environment = process.env.NODE_ENV ? process.env.NODE_ENV : "developent";
/* eslint-enable no-undef */

var config = {
  levelControllerConfig : {
    tableName: "_data_elevator",
    filePath: null
  }
}

switch(environment) {
case "development":
  break;
}

module.exports = config;