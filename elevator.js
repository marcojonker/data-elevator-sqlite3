/**
 * Elevator
 * Data elevator
**/

'use strict'

var ElevatorBase = require('data-elevator/lib/elevator-engine/elevator-base');
var ConsoleLogger = require('data-elevator/lib/logger/console-logger');
var Sqlite3LevelController = require('./lib/level-controllers/sqlite3-level-controller.js');

//__dirname is added only for the construct command so construct command knows where to find its resources
var elevator = new ElevatorBase(new ConsoleLogger(false), Sqlite3LevelController, __dirname);
elevator.run(function(error) { });

