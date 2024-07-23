const Video = require("../models/video.schema");

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      res.status(500).json({ error: "Video not found" });
    } else {
      res.status(200).json(video);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!video) {
      res.status(500).json({ error: "Video not found" });
    } else {
      res.status(200).json(video);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) {
      res.status(500).json({ error: "Video not found" });
    } else {
      res.status(200).json({ message: "Video supprimé" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getVideos,
  getOneVideo,
  updateVideo,
  deleteVideo,
  createVideo,
};
