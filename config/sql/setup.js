//user table
/** Contains queries related to the user model
  - Save User
  - Delete User
  - Retrieve user information
**/


var fs = require("fs");
var exists = fs.existsSync(process.env.FILE);
var sqlite3 = require("sqlite3").verbose();
var db = null;

function initialize() {
  db =  sqlite3.Database(process.env.FILE);
  db.serialize(function() {
    db.run( "CREATE TABLE if not EXISTS User ( uid TEXT NOT NULL PRIMARY KEY,email TEXT NOT NULL, password TEXT NOT NULL ) " );
  });
}

/** saves user info in d.b
    <param> object user
    returns @GUID || error if unable to save
**/

exports.saveUser = function(user) {
  if (!db) {
    initialize();
  } 
  
  var uid = //generate random guid
  db.run("INSERT INTO User VALUES ( ?, ?, ? )", uid, user.getEmail(),user.getPassword(),function(result) {
    console.log("the result", result);
    return result;
  });
}




/** checks if email already exists 
    <param> string email
    returns @bool 
**/

exports.findEmail = function(email) {
  if (!db) {
    initialize();
  } 

  db.get("SELECT email FROM User where email = ? ", email, function(err,rows) {
    if (err) {
      console.log(err);
    }
    console.log(rows);
    return (rows.length) ? true : false;
  }); 
}
