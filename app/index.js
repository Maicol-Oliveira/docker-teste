const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("teste docker proxy reverse!");
});

app.listen(3000);