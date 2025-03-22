const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  issuePostController,
  getAllIssues,
  getUserIssue,
} = require("../controllers/issueController");

const router = express.Router();
router.post("/issue-post", authMiddleware, issuePostController);
router.get("/check-issues", authMiddleware, getAllIssues);
router.get("/check-user-issues", authMiddleware, getUserIssue);

module.exports = router;
