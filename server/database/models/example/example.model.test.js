const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists,
  checkNonUniqueIndex,
} = require('sequelize-test-helpers');

const ExampleModel = require('./example.model');

const expectedFields = [
  'id',
  'name',
  'original_price',
  'sale_price',
  'default?',
  'product_id',
];

describe('Example Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('example');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(example));
  });
});
