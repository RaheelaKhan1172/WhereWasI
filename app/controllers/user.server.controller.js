var UserModel = require("../models/user.server.model").User;

exports.create = function(req,res,next) {
  var user = new User(req.body);
  console.log(user,"User");
}
