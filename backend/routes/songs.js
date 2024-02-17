const express = require("express");
const router = express.Router();
const Song = require("../models/song");

// Create a song
router.post("/", async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Overall statistics
router.get("/statistics", async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct("artist").countDocuments();
    const totalAlbums = await Song.distinct("album").countDocuments();
    const totalGenres = await Song.distinct("genre").countDocuments();

    const songsByGenre = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);

    const songsByArtist = await Song.aggregate([
      { $group: { _id: "$artist", count: { $sum: 1 } } },
    ]);

    const albumsByArtist = await Song.aggregate([
      { $group: { _id: "$artist", albums: { $addToSet: "$album" } } },
      { $addFields: { totalAlbums: { $size: "$albums" } } },
    ]);

    const songsByAlbum = await Song.aggregate([
      { $group: { _id: "$album", count: { $sum: 1 } } },
    ]);

    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsByGenre,
      songsByArtist,
      albumsByArtist,
      songsByAlbum,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all songs
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a song by ID
router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a song
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findByIdAndUpdate(id, req.body, { new: true });
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a song
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Song.findByIdAndDelete(id);
    res.json({ message: "Song deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
