const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'Nutrition_Facts',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fact_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fact_info: {
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
    tableName: 'nutrition_facts',
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
