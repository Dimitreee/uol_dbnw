const sqlite3 = require('sqlite3').verbose();

function initDBConnection() {
    global.db = new sqlite3.Database('./db/database.db',function(err){
        if(err){
            console.error(err);
            process.exit(1); // bail out we can't connect to the DB
        } else {
            console.log("Database connected");
            global.db.run("PRAGMA foreign_keys=ON"); // tell SQLite to pay attention to foreign key constraints
        }
    });
}

module.exports = { initDBConnection }
