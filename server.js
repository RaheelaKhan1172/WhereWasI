const express = require("./config/express");
const sqlite3 = require("./config/sql/setup.js");

const db = sqlite3();

const app = express();
app.listen(3030);


console.log("listining");
module.exports = app;
