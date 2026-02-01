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

// ------------- GET INFOS OF SPECIFIC COMIC  -----------------

router.get("/comic/:comicId", async (req, res) => {
  try {
    const { comicId } = req.params;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.MARVEL_API_KEY}`,
    );
    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(">>>>", error.message);

    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || error.message,
    });
  }
});

module.exports = router;
