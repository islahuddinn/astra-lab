const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  lyrics: { type: String, required: true },
  style: { type: String, required: true },
  output: { type: String },
  audioUrl: { type: String },
});

module.exports = mongoose.model("Song", songSchema);
