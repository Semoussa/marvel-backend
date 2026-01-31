const express = require("express");
const axios = require("axios");
const router = express.Router();

// ------- GET CHARACTERS  --------
router.get("/characters", async (req, res) => {
  try {
    const { limit, skip, name } = req.query;
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters",
      { params: { apiKey: process.env.MARVEL_API_KEY, name, limit, skip } },
    );
    // console.log((await response).data);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || error.message,
    });
  }
});

module.exports = router;
