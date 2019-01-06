const reactionQueries = require("../db/queries.reactions.js");
let completedProblemNumbers = [];


module.exports = {


  showProblem(req, res, next){
    reactionQueries.getReactionSpecies((err, reactionSpecies) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        const showAnswers = completedProblemNumbers.includes(parseInt(process.env.problemNumber));
        let showNextButton = (process.env.problemNumber <=3) ? true : false;
        res.render("problems/show", {reactionSpecies, showAnswers, showNextButton});
      }
    })
  },

  checkAnswer(req, res, next){
    reactionQueries.getReactionSpecies((err, reactionSpecies) => {
      if(err){
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
          completedProblemNumbers.push(parseInt(process.env.problemNumber));
          showAnswers = true;
          let showNextButton = (process.env.problemNumber <=3) ? true : false;
          req.flash("notice", "That's Correct! Great Job.");
          res.render("problems/show", {reactionSpecies, showAnswers, showNextButton});
        } else {
          showAnswers = false;
          let showNextButton = (process.env.problemNumber <=3) ? true : false;
          req.flash("notice", "That's Incorrect, Please Try Again.");
          res.render("problems/show", {reactionSpecies, showAnswers, showNextButton});
        }

      }
    })
  },

  showNextProblem(req, res, next){

      if(process.env.problemNumber <= 3){
        process.env['problemNumber'] = parseInt(process.env.problemNumber) + 1;
      }
      reactionQueries.getReactionSpecies((err, reactionSpecies) => {
        if(err){
          res.redirect("/");
        } else {
          let showAnswers = false;
          let showNextButton = (process.env.problemNumber <=3) ? true : false;
          res.render("problems/show", {reactionSpecies, showAnswers, showNextButton})
        }
      })



  },


  resetProblems(req, res, next){
    process.env['problemNumber'] = 1;
    completedProblemNumbers = [];
    reactionQueries.getReactionSpecies((err, reactionSpecies) => {
      if(err){
        res.redirect("/");
      } else {
        let showAnswers = false;
        let showNextButton = (process.env.problemNumber <=3) ? true : false;
        res.render("problems/show", {reactionSpecies, showAnswers, showNextButton})
      }
    })
  },

  showHistory(req, res, next){
    reactionQueries.getReactionSpeciesCompletedProblems(completedProblemNumbers, (err, reactionSpecies) => {
      if(err){
        res.redirect("/");
      } else {
        let problemReactants = [];
        let problemProducts = [];
        completedProblemNumbers.forEach((problemNumber, index) => {
          problemReactants.push(reactionSpecies.reactantSpecies.filter(reactant => completedProblemNumbers[index] == reactant.reactionId));
          problemProducts.push(reactionSpecies.productSpecies.filter(product => completedProblemNumbers[index] == product.reactionId));
        });
        res.render("history", {problemReactants, problemProducts, completedProblemNumbers})
      }
    })
  }




}
