const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/names", (req, res) => {
  res.status(200).json({
    name: "DaDDy Chill",
  });
});

app.post("/names", (req, res) => {
  if (!req.body) {
    throw console.error();
  }

  res.status(201).json({
    success: "You are create successful",
  });
});

module.exports = app;
