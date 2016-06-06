/**
 * SqlLiteLevelController
 * Store and retrieve current level from sqllite
**/

'use strict'

var util = require('util');
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var Errors = require('data-elevator/lib/errors/elevator-errors');
var BaseLevelController = require('data-elevator/lib/level-controllers/base-level-controller.js');

/**
 * Constructor
 * @param config
 */
var SqlLiteLevelController = function(config) {
    this.database = null;
    
    SqlLiteLevelController.super_.apply(this, arguments);
    
    // if(!config.levelControllerConfig.connectionUrl || typeof config.levelControllerConfig.connectionUrl !== 'string' && config.levelControllerConfig.connectionUrl.length === 0) {
    //     throw Errors.invalidConfig('SqlLite connectionUrl missing in configuration file');
    // }
    
    // if(!config.levelControllerConfig.collectionName || typeof config.levelControllerConfig.collectionName !== 'string' && config.levelControllerConfig.collectionName.length === 0) {
    //     throw Errors.invalidConfig('SqlLite collectionName missing in configuration file');
    // }
    
};

util.inherits(SqlLiteLevelController, BaseLevelController);

/**
 * Save level
 * @param level
 * @param callback(error)
 */
SqlLiteLevelController.prototype.saveCurrentLevel = function(level, callback) {
    return callback(null);
};

/**
 * Retrieve the current level
 * @param callback(error, level)
 */
SqlLiteLevelController.prototype.retrieveCurrentLevel = function(callback) {
    return callback(null);
};

module.exports = SqlLiteLevelController;