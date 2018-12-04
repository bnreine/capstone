'use strict';

let reactants = [];


reactants.push({
  id: 1,
  reactionId: 1,
  speciesId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
});

reactants.push({
  id: 2,
  reactionId: 1,
  speciesId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
});





module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert("Reactants", reactants, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reactants", null, {});
  }
};