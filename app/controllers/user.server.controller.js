var UserModel = require("../models/user.server.model").User;
console.log("User", UserModel);
exports.create = function(req,res,next) {
  console.log("Hellu");
  var user = new UserModel(req.body);
  console.log(user,"User",req.body);
  user.handleValidation(req.body.email,req.body.password,function(res) {
    console.log(res);
  });
}
