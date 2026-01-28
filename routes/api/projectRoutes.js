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

module.exports = router;
