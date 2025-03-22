const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
  updateUser,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/current-user", authMiddleware, currentUserController);
router.put("/update-user", authMiddleware, updateUser);

module.exports = router;
