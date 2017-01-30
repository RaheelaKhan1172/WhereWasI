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
    cb(err);
  });
}

setup(function(err) {
  console.log("huh");
  describe("Testing user save", function() {
    it("Should save without errors if all fields are present",function() {
      user = new UserModel({
        email:"test@test.com",
        password:"password"
      });
      console.log("The user Model");      
      user.handleValidation(user.email,user.password,function(err) {
        if (err) {
          console.log("error");
        } else {
          console.log("othe rerror");
        }
      });
    });

  });

});
