/**
 * Elevator
 * Data elevator
**/
var ElevatorBase = require('data-elevator/lib/elevator-engine/elevator-base');
var ConsoleLogger = require('data-elevator/lib/logger/console-logger');
var Sqlite3LevelController = require('data-elevator-sqlite3/lib/level-controllers/sqlite3-level-controller');
const Level = require('data-elevator/lib/level-controllers/level');

/**
 * Constructor
 * @param logger
 * @param LevelController
 */
class Elevator extends ElevatorBase {
    constructor(logger, LevelController) {
        super(logger, LevelController)
    }
}

var elevator = new Elevator(new ConsoleLogger(false), Sqlite3LevelController);

//Run the elevator
elevator.run(function(error) { });