const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => (
  sequelize.define(
    'Customers',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      referral_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      referral_code_used: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_purchase_complete: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      credit_available: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nutritionist_status: {
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
      tableName: 'Customers',
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
