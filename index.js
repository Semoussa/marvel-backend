const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

app.use(express.json());
app.use(cors());
app.use("/api", charactersRoutes);
app.use("/api", comicsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Route GET" });
});

app.get(/.*/, (req, res) => {
  res.status(404).json({ message: "PAGE NOTE FOUND" });
});
app.listen(process.env.PORT || 3000, () => {
  console.log("server started 🚀🚀");
});
