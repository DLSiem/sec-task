const express = require("express");
const router = express.Router();

const privateTaskController = require("../controllers/privatetask.controller");

router.post("/create/:userId", privateTaskController.create);
router.get("/:userId", privateTaskController.getAll);

module.exports = router;
