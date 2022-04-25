const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Test logging in heroku logs with console.log");
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000, () => console.log("Connected..."));
