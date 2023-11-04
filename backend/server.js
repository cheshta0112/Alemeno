const express = require("express");
const app = express();
const array = require("./Courses");
const port = 8000;
const cors = require("cors");

// Middleware to enable CORS
app.use(cors());

app.use(express.json());

app.get("/courses", (req, res) => {
  res.json(array);
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
