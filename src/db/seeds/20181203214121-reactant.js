'use strict';

let reactants = [];


reactants.push({
  id: 1,
  reactionId: 1,
  speciesId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 2
});

reactants.push({
  id: 2,
  reactionId: 1,
  speciesId: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 1
});

reactants.push({
  id: 3,
  reactionId: 2,
  speciesId: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 1
});

reactants.push({
  id: 4,
  reactionId: 2,
  speciesId: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 1
});

reactants.push({
  id: 5,
  reactionId: 3,
  speciesId: 6,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 1
});

reactants.push({
  id: 6,
  reactionId: 3,
  speciesId: 7,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 2
});

reactants.push({
  id: 7,
  reactionId: 4,
  speciesId: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 3
});

reactants.push({
  id: 8,
  reactionId: 4,
  speciesId: 10,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 1
});

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert("Reactants", reactants, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reactants", null, {});
  }
};
