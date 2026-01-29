const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

app.use(express.json());
app.use(cors());
app.use(charactersRoutes);
app.use(comicsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Route GET" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started 🚀🚀");
});
