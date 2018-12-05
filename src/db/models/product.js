'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
  Product.associate = function(models) {

    Product.belongsTo(models.Specie, {
      foreignKey: "speciesId",
      onDelete: "CASCADE"
    });

  };
  return Product;
};
