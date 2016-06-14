/**
 * Test function for data elevator
**/

'use strict'

var TestBase = require('../node_modules/data-elevator/test/test-base.js');
var path = require('path');
var Sqlite3LevelController = require('../lib/level-controllers/sqlite3-level-controller.js');

var test = new TestBase(path.normalize(path.join(__dirname, '../')), Sqlite3LevelController);
test.runDefaultCommandTests();
