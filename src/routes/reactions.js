const express = require("express");
const router = express.Router();
const reactionController = require("../controllers/reactionController");

router.get("/problems/:problemId", reactionController.showProblem);
router.post("/problems/:problemId/check_answer", reactionController.checkAnswer);
router.get("/problems/:problemId/next_problem", reactionController.showNextProblem)

module.exports = router;
