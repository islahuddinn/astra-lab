const Song = require("../models/song");

// ===========Generate song output
exports.generateSong = async (req, res) => {
  try {
    const { lyrics, style } = req.body;

    const output = `Generated song based on lyrics "${lyrics}" in "${style}" style.`;
    const audioUrl = "https://example.com/audio.mp3"; 

    const song = new Song({ lyrics, style, output, audioUrl });
    await song.save();

    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// ========Get a list of songs
exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve songs" });
  }
};
