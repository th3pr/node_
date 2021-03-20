const express = require("express");
const app = express();
const info = require("./crud");

app.use(express.json());

app.get("/", (req, res) => {
  res.json(info.users());
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json(info.user(+id));
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json(info.remove(+id));
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { track } = req.body;
  res.json(info.update(+id, { name, track }));
});

app.post("/", (req, res) => {
  const { name } = req.body;
  const { track } = req.body;
  res.json(info.create({ name, track }));
});

app.listen(5000, () => console.log("Example app listening on port 5000!"));
