const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "admin123",
  database: "sample",
  port:3306
});

app.get("/", function (req, res) {
  connection.query("select * from employee;", function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

module.exports = {
  path: "/api/",
  handler: app
};