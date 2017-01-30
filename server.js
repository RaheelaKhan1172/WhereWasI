const express = require("./config/express");
const sqlite3 = require("./config/sql/setup.js");

sqlite3.connect(process.env.FILENAME,function(err) {
  if (err) {
    throw err;
  }
  console.log("all good");
});

const app = express();
app.listen(3030);


console.log("listining");
module.exports = app;
