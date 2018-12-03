'use strict';
module.exports = (sequelize, DataTypes) => {
  const Specie = sequelize.define('Specie', {
    formula: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Specie.associate = function(models) {


    Specie.hasMany(models.Reactant, {
      foreignKey: "speciesId",
      as: "reactants",
    });

    Specie.hasMany(models.Product, {
      foreignKey: "speciesId",
      as: "products",
    });

  };
  return Specie;
};
