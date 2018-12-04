const reactionQueries = require("../db/queries.reactions.js");


module.exports = {
  showProblem(req, res, next){
    reactionQueries.getAllTopics((err, topics) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("topics/index", {topics});
      }
    })
  }

}
