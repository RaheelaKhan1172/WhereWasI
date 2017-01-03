var fs = require("fs");
var exists = fs.existsSync(process.env.FILE);
var sqlite3 = require("sqlite3").verbose();

module.exports = function() {
  var db = new sqlite3.Database(process.env.FILE);

  db.serialize(function() {
    db.run( "CREATE TABLE if not EXISTS User ( uid NOT NULL PRIMARY KEY,email TEXT NOT NULL, password TEXT NOT NULL ) " );
  });

  db.close();
}

