const express = require("express");
const router = express.Router();
const reactionController = require("../controllers/reactionController");

router.get("/problems", reactionController.showProblem);
router.post("/problems/check_answer", reactionController.checkAnswer);
router.get("/problems/next_problem", reactionController.showNextProblem);
router.get("/problems/reset_problems", reactionController.resetProblems);

module.exports = router;
