# DATA ELEVATOR SQLITE3 #

The data elevator sqlite3 is an easy to use and very flexible utility for migrating data sources based on the NPM module [data elevator](Link URL). The only difference is that data elevator sqlite3 stores its current migration level in a sqlite3 database.

Storing the current migration level in a database brings advantages when a project shares its data source with multiple running instances of a project. For example when multiple developers working with one database or the project runs on multiple servers.

# QUICKSTART #

1 Install
```
npm install data-elevator
```
2 Construct a new data elevator for the project.
```
node ./node-modules/data-elevator-sqlite3 construct
```
3 Add a new migration.
```
node ./data-elevator/elevator add "add phone number to users"
```
4 Enter you migration code in the generated floor file located in './data-elevator/floors/'.

5 Move the elevator to migrate data.
```
node ./data-elevator/elevator move top
node ./data-elevator/elevator move ground
node ./data-elevator/elevator move 2
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
