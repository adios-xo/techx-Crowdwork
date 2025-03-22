const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  issuePostController,
  getAllIssues,
  getUserIssue,
  issueActive,
  getIssuesById,
  updateStat,
} = require("../controllers/issueController");
const { updateUser } = require("../controllers/authController");

const router = express.Router();
router.post("/issue-post", authMiddleware, issuePostController);
router.get("/check-issues", authMiddleware, getAllIssues);
router.get("/check-user-issues", authMiddleware, getUserIssue);
router.post("/get-id-issues", authMiddleware, getIssuesById);
router.put("/change-status", authMiddleware, issueActive);
router.put("/users/:id", updateStat);
module.exports = router;
