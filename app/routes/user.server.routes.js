var users = require("../../app/controllers/user.server.controller");
console.log(users);
module.exports = function(app) {
  app.route("/signup").post(users.create);
};
