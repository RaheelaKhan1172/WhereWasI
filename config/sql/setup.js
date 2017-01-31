//user table
/** Contains queries related to the user model
  - Save User
  - Delete User
  - Retrieve user information
**/


var fs = require("fs");
var exists = fs.existsSync(process.env.FILENAME);
var sqlite3 = require("sqlite3").verbose();
var db = null;
function initialize() {
  db.serialize(function() {
    db.run( "CREATE TABLE if not EXISTS User ( uid INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT NOT NULL, password TEXT NOT NULL ) " );
  });
}

exports.connect = function(dbname,callback) {
  db = new sqlite3.Database(dbname,sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        function(err) {
          if (err) callback(err);
          else callback();
        }
      );
    initialize();
};

exports.disconnect = function(callback) {
  callback();
}

/** saves user info in d.b
    <param> object user
    returns @GUID || error if unable to save
**/

exports.saveUser = function(user,cb) {
  if (!db) {
    initialize();
  } 
  
  var uid = //generate random guid
  db.run("INSERT INTO User (email,password) VALUES (  ?, ? )", user.getEmail(),user.getPassword(),function(result) {
    console.log("the result", result);
    cb(result);
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

exports.getUserDetails = function( token ) {
  
};

exports.deleteUser = function(key,callback) {
  db.run("DELETE FROM User WHERE UID = ?;",key,function(err) {
    if (err) { 
      callback(err);
    } else {
      callback();
    }
  });
};
