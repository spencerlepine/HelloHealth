const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ExampleModel = require('./product_category');

const expectedFields = ['id', 'category_name', 'productid'];

describe('Product_Category Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('product_category');

  // it('should contain expected properties', () => {
  expectedFields.forEach(checkPropertyExists(example));
  // });
});
