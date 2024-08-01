const router = require("express").Router();
const {
  getAchats,
  getOneAchat,
  updateAchat,
  deleteAchat,
  createAchat,
} = require("../controllers/achat-controller");

// api/achats

// CRUD admin

router.get("/", getAchats);

router.get("/:id", getOneAchat);
router.put("/:id", updateAchat);
router.delete("/:id", deleteAchat);
router.post("/", createAchat);

module.exports = router;
