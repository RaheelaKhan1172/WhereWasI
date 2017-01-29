var crypto = require("crypto");
var db = require("../../config/sql/setup.js");

/***** User Model *****/
var User = function(email,password) {
  this.email = null;
  this.password = null;
  this.hash = null;
 
  this.handleValidation(email,password);
}



/** vallidates user information 
  <param> string email 
  <param> string password
  returns @JsonObject containing errors if invalid data || @bool if success
**/

User.prototype.handleValidation = function( email /* string */, password /*string*/) {
  var errors = {};

  if (!this.setEmail(email)) {
    errors.invalidEmail = "Please enter a valid e-mail.";
  }
  
  if (!this.checkIfUnique(email)) {
    errors.exists = "This e-mail address is already in use.";
  }

  if (!this.setPassword(password)) {
    errors.invalidPassword("Password must be 6 or more characers long");
  }
  
  if (errors.hasOwnProperty("invalidPassword") || errors.hasOwnProperty("exists") || errors.hasOwnProperty("invalidEmail")) {
    return errors;
  }
  console.log(this,"this");
  db.saveUser(this);
  return true;
}




/* returns current user's email */

User.prototype.getEmail = function() {
  return this.email;
}




/** sets a user models email 
  <param > string email address
  returns @bool indicating if succesfully set email 
**/

User.prototype.validEmail = function(email /* string */ ) {
  var reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-0.-]+$/g;
  var m = email.match(reg);
  if (m) {
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



User.prototype.getPassword = function() {
  return this.password;
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

module.exports {User: User}

