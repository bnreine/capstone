const express = require("express");
const router = express.Router();
const reactionController = require("../controllers/reactionController");

router.get("/problems/:problemId", reactionController.showProblem);
router.post("/problems/:problemId/check_answer", reactionController.checkAnswer);

module.exports = router;
