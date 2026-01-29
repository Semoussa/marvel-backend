const express = require("express");
const axios = require("axios");
const router = express.Router();

// ------- GET CHARACTERS  --------
router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`,
    );
    // console.log((await response).data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
