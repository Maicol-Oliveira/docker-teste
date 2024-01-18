const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("teste v33 44s");
});

app.listen(3000);