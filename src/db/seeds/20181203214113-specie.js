'use strict';

let species = [];

species.push({
  id: 1,
  formula: "HBr",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 2,
  formula: "Cl2",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 3,
  formula: "HCl",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 4,
  formula: "Br2",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 5,
  formula: "H2",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 6,
  formula: "CH4",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 7,
  formula: "O2",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 8,
  formula: "CO2",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 9,
  formula: "H2O",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 10,
  formula: "N2",
  createdAt: new Date(),
  updatedAt: new Date()
})

species.push({
  id: 11,
  formula: "NH3",
  createdAt: new Date(),
  updatedAt: new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert("Species", species, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Species", null, {});
  }
};
