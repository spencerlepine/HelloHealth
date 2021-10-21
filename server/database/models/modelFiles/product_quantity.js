const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'product_quantity',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subscription_active: {
      type: DataTypes.STRING,
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
    tableName: 'product_quantity',
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
