const Specie = require("./models").Specie;
const Reactant = require("./models").Reactant;
const Product = require("./models").Product;


module.exports = {

  getReactionSpecies(problemId, callback){
    let reactionSpecies = {};
    reactionSpecies["reactantSpecies"] = [];
    Reactant.findAll({
      include: [{
        model: Specie
      }]
    })
    .then((reactants) => {
      let reactionReactants = reactants.filter(reactant => reactant.reactionId == problemId);
      reactionSpecies["reactantSpecies"] = reactionReactants;
      Product.findAll({
        include: [{
          model: Specie
        }]
      })
      .then((products) => {
        let reactionProducts = products.filter(product => product.reactionId == problemId);
        reactionSpecies["productSpecies"] = reactionProducts;
        callback(null, reactionSpecies);
      })
      .catch((err) => {
        callback(err);
      })
    })
    .catch((err) => {
      callback(err);
    })
  }

}
