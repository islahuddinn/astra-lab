const express = require("express");
const { generateSong, getSongs } = require("../controllers/songController");

const router = express.Router();

router.post("/generate", generateSong);
router.get("/", getSongs);

module.exports = router;
