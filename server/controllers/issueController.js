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
const getIssuesById = async (req, res) => {
  try {
    const { id } = req.body;

    const issue = await issueModel.findById(id);
    if (!issue) return res.status(404).json({ error: "Issue not found" });

    res.json(issue);
  } catch (error) {
    res.status(500).json({ error: "Error fetching issue" });
  }
};
const issueActive = async (req, res) => {
  try {
    const id = req.params;
    const status = req.body;
    console.log(id);
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid issue ID" });
    }

    const issue = await issueModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!issue) return res.status(404).json({ error: "Issue not found" });

    res.json(issue);
  } catch (error) {
    res.status(500).json({ error: "Error updating issue status" });
  }
};

module.exports = {
  issuePostController,
  getAllIssues,
  getUserIssue,
  issueActive,
  getIssuesById,
};
