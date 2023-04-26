const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

app.get("/names", (req, res) => {
  res.status(200).json({
    name: "DaDDy Chill",
  });
});

app.listen(4000, () => {
  console.log("Server is running on Port:4000");
});
