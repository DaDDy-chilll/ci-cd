require("dotenv").config({ path: ".env" });
const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
apserverp.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
