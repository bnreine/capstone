'use strict';

let products = [];


products.push({
  id: 1,
  reactionId: 1,
  speciesId: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 2
});

products.push({
  id: 2,
  reactionId: 1,
  speciesId: 4,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 1
});

products.push({
  id: 3,
  reactionId: 2,
  speciesId: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 2
});

products.push({
  id: 4,
  reactionId: 3,
  speciesId: 8,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 1
});

products.push({
  id: 5,
  reactionId: 3,
  speciesId: 9,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 2
});

products.push({
  id: 6,
  reactionId: 4,
  speciesId: 11,
  createdAt: new Date(),
  updatedAt: new Date(),
  coefficient: 2
});

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert("Products", products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
