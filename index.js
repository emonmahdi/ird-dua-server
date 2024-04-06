const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Get the dua from IRD");
});

app.listen(port, () => {
  console.log("IRD Dua Server Running...");
});
