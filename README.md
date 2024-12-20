# DATA ELEVATOR SQLITE3 #

The data elevator sqlite3 is an easy to use and very flexible utility for migrating data sources based on the NPM module [data elevator](https://www.npmjs.com/package/data-elevator). The only difference is that data elevator sqlite3 stores its current migration level in a sqlite3 database.

Storing the current migration level in a database brings advantages when a project shares its data source with multiple running instances of a project. For example when multiple developers working with one database or the project runs on multiple servers.

# QUICKSTART #

**STEP 1:** Install
```
npm install data-elevator-sqlite3
```
**STEP 2:** Construct a new data elevator for the project.
```
node ./node-modules/data-elevator-sqlite3 construct
```
**STEP 3:** Add a new migration.
```
node ./data-elevator/elevator add "add phone number to users"
```
**STEP 4:** Enter you migration code in the generated floor file.
```
see: ./data-elevator/floors/
```
**STEP 5:** Move the elevator to migrate data.
```
node ./data-elevator/elevator move top
node ./data-elevator/elevator move ground
node ./data-elevator/elevator move 2
node ./data-elevator/elevator move up 2
node ./data-elevator/elevator move down 3
```
**STEP 6:** Use help command to get information about additional commands
```
node ./data-elevator/elevator help
```


# CONFIGURATION #

* **levelControllerConfig.tableName:** Name of the table to store the migration level in
* **levelControllerConfig.filePath:** Path to the Sqlite3 database file 

```
var config = {
    levelControllerConfig : {
       tableName: "data_elevator",
       filePath: null
    }
}
```

# FURTHER DOCUMENTATION #

For further documenation about commands or customizations see [data elevator documentation](https://www.npmjs.com/package/data-elevator).

# RELATED MODULES #

* data-elevator ([npm](https://www.npmjs.com/package/data-elevator), [github](https://github.com/marcojonker/data-elevator.git)) - store elevator migration levels in a plain file
* data-elevator-elasticsearch ([npm](https://www.npmjs.com/package/data-elevator-elasticsearch), [github](https://github.com/marcojonker/data-elevator-elasticsearch.git)) - store elevator migration levels in elasticsearch
* data-elevator-mongodb ([npm](https://www.npmjs.com/package/data-elevator-mongodb), [github](https://github.com/marcojonker/data-elevator-mongodb.git)) - store elevator migration levels in mongodb
* data-elevator-mysql ([npm](https://www.npmjs.com/package/data-elevator-mysql), [github](https://github.com/marcojonker/data-elevator-mysql.git)) - store elevator migration levels in mysql
* data-elevator-postgres ([npm](https://www.npmjs.com/package/data-elevator-postgres), [github](https://github.com/marcojonker/data-elevator-postgres.git)) - store elevator migration levels in postgres
* data-elevator-sqlite3 ([npm](https://www.npmjs.com/package/data-elevator-sqlite3), [github](https://github.com/marcojonker/data-elevator-sqlite3.git)) - store elevator migration levels in sqlite3
