const router = require("express").Router();
const { Task, Project } = require("../../models");
const { authMiddleware } = require("../../utils/auth");

router.use(authMiddleware);

// Create task
router.post("/projects/:projectId/tasks", async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  if (!project || project.user.toString() !== req.user._id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const task = await Task.create({
    ...req.body,
    project: project._id,
  });

  res.json(task);
});

// Get tasks for project
router.get("/projects/:projectId/tasks", async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  if (!project || project.user.toString() !== req.user._id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const tasks = await Task.find({ project: project._id });
  res.json(tasks);
});

module.exports = router;
