const router = require("express").Router();
const { Project } = require("../../models");
const { authMiddleware } = require("../../utils/auth");

router.use(authMiddleware);

router.post("/", async (req, res) => {
  const project = await Project.create({
    ...req.body,
    user: req.user._id,
  });
  res.json(project);
});

router.get("/", async (req, res) => {
  const projects = await Project.find({ user: req.user._id });
  res.json(projects);
});

router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project || project.user.toString() !== req.user._id) {
    return res.status(403).json({ message: "Forbidden" });
  }
  res.json(project);
});


module.exports = router;
