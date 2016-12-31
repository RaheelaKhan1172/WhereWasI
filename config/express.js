const express = require("express");

module.exports = function() {
  const app = express();
  
  //routes
  require("../app/routes/index.server.routes.js")(app);
  
  return app;
}
