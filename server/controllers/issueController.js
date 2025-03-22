const issueModel = require("../models/issueModel");

const issuePostController = async (req, res) => {
  const issue = new issueModel(req.body);
  await issue.save();
  return res.status(201).send({
    success: true,
    message: "Issue Posted successfully",
    issue,
  });
};
const getUserIssue = async (req, res) => {
  try {
    const issues = await issueModel
      .find({ userId: req.body.userId })
      .select("-_id title desc type location pin");
    return res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
const getAllIssues = async (req, res) => {
  try {
    const issues = await issueModel.find();

    return res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { issuePostController, getAllIssues, getUserIssue };
