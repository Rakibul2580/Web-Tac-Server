const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;
const items = require("./data/all-items.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send(items);
});
app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const item = items.find((item) => item.id === id);
  res.send(item);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
