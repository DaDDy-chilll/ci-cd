require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
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

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});

module.exports = app;
