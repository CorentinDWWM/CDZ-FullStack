const router = require("express").Router();
const { getUserAchat } = require("../controllers/achat-controller");

// api/userAchats

router.get("/:email", getUserAchat);

module.exports = router;
