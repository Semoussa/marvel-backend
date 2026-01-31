const express = require("express");
const axios = require("axios");
const router = express.Router();

// -------- GET COMICS ---------------
router.get("/comics", async (req, res) => {
  try {
    const { title, limit, skip } = req.query;
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics",
      { params: { apiKey: process.env.MARVEL_API_KEY, title, limit, skip } },
    );
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || error.message,
    });
  }
});

// ------------ GET COMICS FOR A SPECIFIC CHARA  --------------
// Get a list of comics containing a specific character

router.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.MARVEL_API_KEY}`,
    );

    // console.log(req.params);
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
