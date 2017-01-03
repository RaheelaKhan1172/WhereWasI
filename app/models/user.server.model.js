var crypto = require("crypto");
//require db file

/***** User Model *****/
var User = function(email,password) {
  this.email = email;
  this.password = password;
  this.salt;
}




/* returns current user's email */

User.prototype.getEmail = function() {
  return this.email;
}




/** sets a user models email 
  <param > string email address
  returns @bool indicating if succesfully set email 
**/

User.prototype.setEmail = function(email /* string */ ) {
  var reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-0.-]+$/g;
  var m = email.match(reg);
  if (m) {
    var exists = this.checkIfUnique(email);
    if ( !exists ) {
      this.email = email;
      return true;
    }
  return false //email is incorrect or already exists in db
}




/** checks if user selected email is unique
 <param> string email address
 returns @bool indicating if exists
**/

User.checkIfUnique = function( email /* string */ ) {
  var exists = db.findEmail( email );
  return exists; 
}




/** sets a user model password 
   <param> string password
   returns @bool indicating if succesfully set password
**/

User.prototype.setPassword = function(password /* string */) {
  if (password.length < 6 ) {
    return false;
  }

  this.salt = new Buffer(crypto.randomBytes(16).toString("base64"), "base64");
  this.password = this.hashPassword(password);
}




/** hash password for db */

User.prototype.hashPassword = function(password /*string */) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString("base64");
}




/* accepts string arg, hashes arg, and compares to curr user's hash password */

User.prototype.authenticate = function( password /* string */ ) {
  return this.password = this.hashPassword( password );
}



