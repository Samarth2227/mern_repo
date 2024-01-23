const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
app.use(express.json());
app.use(cors());

app.use("/api/v1", auth);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});