const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("61070267");
});

module.exports = app;
