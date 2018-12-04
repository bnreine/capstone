const reactionQueries = require("../db/queries.reactions.js");


module.exports = {


  showProblem(req, res, next){
    reactionQueries.getReactionSpecies(req.params.problemId, (err, reactionSpecies) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("problems/show", {reactionSpecies});
      }
    })
  }


}
