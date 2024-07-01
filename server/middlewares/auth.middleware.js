const jwt = require("jsonwebtoken");

// middleware to check if the user is authenticated
exports.isAuthenticated = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.json({ message: "Token not found" });
  }
};
