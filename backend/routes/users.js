const router = require("express").Router();
const {
  signupUser,
  verifyMail,
  loginUser,
  forgotPassword,
  resetPassword,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/user-controller");

// l'url correspond à localhost:5000/api/users

router.post("/signup", signupUser);

router.post("/signin", loginUser);

router.get("/verifyMail/:token", verifyMail);

router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);

// CRUD admin

router.get("/", getUsers);

router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);

module.exports = router;
