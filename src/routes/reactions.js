const express = require("express");
const router = express.Router();
const reactionController = require("../controllers/reactionController");

router.get("/problems/1", reactionController.showProblem);

module.exports = router;
