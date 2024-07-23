const router = require("express").Router();
const {
  getVideos,
  getOneVideo,
  updateVideo,
  deleteVideo,
  createVideo,
} = require("../controllers/video-controller");

// api/videos

// CRUD admin

router.get("/", getVideos);

router.get("/:id", getOneVideo);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);
router.post("/", createVideo);

module.exports = router;
