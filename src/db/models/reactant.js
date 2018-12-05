'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reactant = sequelize.define('Reactant', {
    reactionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speciesId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coefficient: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Reactant.associate = function(models) {


    Reactant.belongsTo(models.Specie, {
      foreignKey: "speciesId",
      onDelete: "CASCADE"
    });


  };
  return Reactant;
};
