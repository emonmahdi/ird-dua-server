const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();

const port = process.env.PORT || 5000;

const db = new sqlite3.Database("./dua_main.sqlite", (err) => {
  if (err) {
    console.log(err?.message);
  } else {
    console.log("Connected to the IRD Dua Database");
  }
});

// Endpoint to fetch categories
app.get("/categories", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    console.log(rows);
    res.json(rows);
  });
});

//subcategories
app.get("/subcategories", (req, res) => {
  db.all("SELECT * FROM sub_category", (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    console.log(data);
    res.json(data);
  });
});

app.get("/", (req, res) => {
  res.send("Get the dua from IRD");
});

app.listen(port, () => {
  console.log("IRD Dua Server Running...");
});
