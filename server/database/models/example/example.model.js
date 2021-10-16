const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => (
  sequelize.define(
    'example',
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
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      original_price: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      sale_price: {
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
      tableName: 'example',
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
  )
);
