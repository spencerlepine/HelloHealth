const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'product_category',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'default?': {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'product_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'example_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);
