const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.get("/login", (req, res) => [res.send("Login page")]);

router.get("/signup", (req, res) => [res.send("Signup page")]);
router.post("/signup", authController.signup);

module.exports = router;
