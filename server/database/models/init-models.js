// HERE
// Run Postgres in terminal ($ psql)
// Initialize the database with `config/init.sql`
// Install `sequelize-auto` https://github.com/sequelize/sequelize-auto
// Run the following command (all one line):
//  $ npx sequelize-auto -h 127.0.0.1 -d postgres -u postgres -x example -p
//        5432  --dialect postgres -c ./config/db.config.js -o ./src/models -t
//        style product styles features skus related photos

const { DataTypes } = require('sequelize');
const exampleModel = require('./example/example.model');

const initModels = (sequelize) => {
  const example = exampleModel(sequelize, DataTypes);

  return {
    example,
  };
};

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
