const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define(
  'Messages',
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
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    response_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'default?': {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    // HAD TO ADD THESE?
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    farm_rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'messages',
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

// const Sequelize = require('sequelize');

// module.exports = (sequelize, DataTypes) => (
//   sequelize.define(
//     'Messages',
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//       },
//       user_id: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       message: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       response_status: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       'default?': {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//         defaultValue: true,
//       },
//     },
//     {
//       sequelize,
//       tableName: 'messages',
//       schema: 'public',
//       timestamps: false,
//       indexes: [
//         {
//           name: 'example_pkey',
//           unique: true,
//           fields: [{ name: 'id' }],
//         },
//       ],
//     },
//   )
// );
