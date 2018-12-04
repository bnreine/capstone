'use strict';

let products = [];


products.push({
  id: 1,
  reactionId: 1,
  speciesId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
});

products.push({
  id: 2,
  reactionId: 1,
  speciesId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
});



module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert("Products", products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
