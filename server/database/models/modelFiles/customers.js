const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'customers',
  {
    id: {
      type: DataTypes.STRING,
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
    'first name': {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    'last name': {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'Zip Code': {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'referral code': {
      type: DataTypes.STRING,
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
  },
  {
    sequelize,
    tableName: 'customers',
    freezeTableName: true,
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
