const router = require("express").Router();
const {
  getAchats,
  getOneAchat,
  updateAchat,
  deleteAchat,
  createAchat,
  syncPurchases,
} = require("../controllers/achat-controller");

// api/achats

router.get("/", getAchats);
router.get("/syncPurchases", syncPurchases);
router.get("/:id", getOneAchat);
router.put("/:id", updateAchat);
router.delete("/:id", deleteAchat);
router.post("/", createAchat);

module.exports = router;
