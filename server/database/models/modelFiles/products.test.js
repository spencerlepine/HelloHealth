const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ExampleModel = require('./products');

const expectedFields = [
  'id',
  'product_name',
  'product_description',
  'product_cost',
  'product_inventory',
  'product_image',
  'product_rating',
  'farm_id',
  'reviews_count',
];

describe('Products Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('products');

  // it('should contain expected properties', () => {
  expectedFields.forEach(checkPropertyExists(example));
  // });
});
