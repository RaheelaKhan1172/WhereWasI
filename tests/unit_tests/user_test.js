var assert = require("assert"),
    vows = require("vows"),
    async = require("async"),
    db = null;
    should = require("should");
    

var UserModel = require("../../app/models/user.server.model.js").User;
var user = null;
var setup = function(cb) {
  db = require("../../config/sql/setup.js");
  db.connect(process.env.FILENAME, function(err) {
    if (err) {
      console.log("uh oh",err);
    }
    console.log("lets see");
  });
}
beforeEach(function() {
  setup();
});
  
  describe("Testing user save", function() {
    it("Should save without errors if all fields are present",function() {
      var pass = "password",em = "test@cool.com";
      user = new UserModel({
        email:em,
        password:pass
      });
      console.log("The user Model");      
      user.handleValidation(em,pass,function(err) {
        if (err) {
          console.log("error");
        } else {
          console.log("othe rerror");
        }
      });
    });

  });
  
  describe("Should get user without error", function() {
    it ("Should get user info",function() {
      var id = 1;
      user.getUserDetails(id, function(err) {
        should.not.exist(err);
      });  
    });
  });

  describe("Delete user", function() {
    it("Should delete user without error",function() {
      var id = 1;
      user.deleteUser(id, function(err) {
        should.not.exist(err);
      });
    });
  });
