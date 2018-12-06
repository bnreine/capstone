const reactionQueries = require("../db/queries.reactions.js");


module.exports = {


  showProblem(req, res, next){
    reactionQueries.getReactionSpecies((err, reactionSpecies) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        const showAnswers = false;
        res.render("problems/show", {reactionSpecies, showAnswers});
      }
    })
  },

  checkAnswer(req, res, next){
    reactionQueries.getReactionSpecies((err, reactionSpecies) => {
      if(err){
        console.log("error returning from db query")
        res.redirect("static/index")
      } else {
        let showAnswers;
        let isCorrect = true;

        reactionSpecies.reactantSpecies.forEach((reactant, index) => {
          if(reactant.coefficient !== parseInt(req.body[`Reactant${index + 1}Coefficient`])){
            isCorrect = false;
          }
        })

        reactionSpecies.productSpecies.forEach((product, index) => {
          if(product.coefficient !== parseInt(req.body[`Product${index + 1}Coefficient`])){
            isCorrect = false;
          }
        })

        if(isCorrect){
          showAnswers = true;
          req.flash("notice", "That's Correct! Great Job.");
          res.render("problems/show", {reactionSpecies, showAnswers});
        } else {
          showAnswers = false;
          req.flash("notice", "That's Incorrect, Please Try Again.");
          res.render("problems/show", {reactionSpecies, showAnswers});
        }

      }
    })
  },

  showNextProblem(req, res, next){
    process.env['problemNumber'] = parseInt(process.env.problemNumber) + 1;
    reactionQueries.getReactionSpecies((err, reactionSpecies) => {
      if(err){
        res.redirect("/");
      } else {
        let showAnswers = false;
        res.render("problems/show", {reactionSpecies, showAnswers})
      }
    })
  },


  resetProblems(req, res, next){
    process.env['problemNumber'] = 1;
    reactionQueries.getReactionSpecies((err, reactionSpecies) => {
      if(err){
        res.redirect("/");
      } else {
        let showAnswers = false;
        res.render("problems/show", {reactionSpecies, showAnswers})
      }
    })
  }




}
