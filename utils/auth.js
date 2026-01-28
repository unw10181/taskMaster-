const jwt = require("jsonwebtoken");

module.exports = {
  authMiddleware(req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Not logged in" });
    }

    token = token.split(" ").pop();

    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
      req.user = data;
      next();
    } catch {
      return res.status(401).json({ message: "Invalid token" });
    }
  },

  signToken(user) {
    return jwt.sign(
      { data: { _id: user._id, email: user.email, username: user.username } },
      process.env.JWT_SECRET,
      { expiresIn: "2h" },
    );
  },
};
