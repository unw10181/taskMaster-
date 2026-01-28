const router = require("express").Router();
const { User } = require("../../models");
const { signToken } = require("../../utils/auth");

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error("REGISTER ERROR:", err); // logging error occuring in parse
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await user.isCorrectPassword(req.body.password);
  if (!valid) return res.status(400).json({ message: "Wrong password" });

  const token = signToken(user);
  res.json({ token, user });
});

module.exports = router;
