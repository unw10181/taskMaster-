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



module.exports = router;
