const express = require("express");
      bodyParser = require("body-parser");

module.exports = function() {
  const app = express();
  
  app.use(bodyParser.urlencoded({
    extended:true
  }));

  app.use(bodyParser.json());

  //routes
  require("../app/routes/index.server.routes.js")(app);
  require("../app/routes/users.server.routes.js")(app);
  
  return app;
}
