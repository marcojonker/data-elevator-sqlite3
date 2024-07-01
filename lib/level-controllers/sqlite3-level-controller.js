/**
 * Sqlite3LevelController
 * Store and retrieve current level from sqlite3
**/
var async = require('async');
var sqlite3 = require('sqlite3').verbose();
var Errors = require('data-elevator/lib/errors/elevator-errors');
var BaseLevelController = require('data-elevator/lib/level-controllers/base-level-controller.js');
var Level = require('data-elevator/lib/level-controllers/level.js');

/**
 * Constructor
 * @param config
 */
class Sqlite3LevelController extends BaseLevelController {

  constructor(config) {
    super(config)

    if (!config.levelControllerConfig.filePath || typeof config.levelControllerConfig.filePath !== 'string' && config.levelControllerConfig.filePath.length === 0) {
      throw Errors.invalidConfig("Sqlite3 'filePath' missing in configuration file");
    }

    if (!config.levelControllerConfig.tableName || typeof config.levelControllerConfig.tableName !== 'string' && config.levelControllerConfig.tableName.length === 0) {
      throw Errors.invalidConfig("Sqlite3 'tableName' missing in configuration file");
    }
  }

  getConnection(callback) {
    var tableName = this.config.levelControllerConfig.tableName;
    var connection = new sqlite3.Database(this.config.levelControllerConfig.filePath);

    //Create table if it is not available
    var query = "CREATE TABLE IF NOT EXISTS " + tableName + " (" +
            "identifier INTEGER," +
            "timestamp INTEGER);";

    connection.run(query, function (error) {
      if (error) {
        connection.close();
        return callback(Errors.generalError("Sqlite3 failed to create table '" + tableName + "'", error));
      } else {
        this.connection = connection;
        return callback(null, connection);
      }
    });
  }

  /**
     * Save level
     * @param level
     * @param callback(error)
     */
  saveCurrentLevel(level, callback) {
    var self = this;
    var tableName = this.config.levelControllerConfig.tableName;

    async.waterfall([
      //Get database connection
      function (callback) {
        self.getConnection(function (error, connection) {
          return callback(error, connection);
        });
      },
      // Check if there are already migrations
      function (connection, callback) {
        var query = "SELECT count(*) AS rowcount FROM " + tableName;
        connection.all(query, function (error, rows) {
          if (error) {
            connection.close();
            return callback(Errors.generalError("Sqlite3 failed to query table '" + tableName + "'", error));
          } else {
            return callback(null, connection, (parseInt(rows[0].rowcount) !== 0));
          }
        });
      },
      //Insert or update current migration
      function (connection, rowsFound, callback) {
        var query = null;

        if (rowsFound === false) {
          query = "INSERT INTO " + tableName + "(identifier, timestamp) VALUES (" + level.identifier + ", " + level.timestamp + ")";
        } else {
          query = "UPDATE " + tableName + " SET identifier=" + level.identifier + ", timestamp=" + level.timestamp;
        }

        connection.run(query, function (error) {
          connection.close();

          if (error) {
            return callback(Errors.generalError("Sqlite3 failed to update table '" + tableName + "'", error));
          } else {
            return callback(null);
          }
        });
      }
    ],
    function (error) {
      return callback(error);
    }
    );
  }

  /**
     * Retrieve the current level
     * @param callback(error, level)
     */
  retrieveCurrentLevel(callback) {
    var self = this;
    var tableName = this.config.levelControllerConfig.tableName;

    async.waterfall([
      //Get postgres connection
      function (callback) {
        self.getConnection(function (error, connection) {
          return callback(error, connection);
        });
      },
      //Retrieve level
      function (connection, callback) {
        var query = "SELECT * FROM " + tableName + " LIMIT 1";
        connection.all(query, function (error, rows) {
          connection.close();

          if (error) {
            return callback(Errors.generalError("Sqlite3 failed to query table '" + tableName + "'", error));
          } else {
            var level = null;

            if (rows.length > 0) {
              level = new Level();
              level.identifier = rows[0].identifier;
              level.timestamp = rows[0].timestamp;
            }
            return callback(null, level);
          }
        });
      }
    ], callback);

  }
}

module.exports = Sqlite3LevelController;