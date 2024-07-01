const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/protected", authMiddleware.isAuthenticated, (req, res) => {
  res.json({
    message: "You are authenticated",
    user: req.user,
  });
});

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
