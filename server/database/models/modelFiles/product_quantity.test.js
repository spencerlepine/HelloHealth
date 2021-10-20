const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ExampleModel = require('./product_quantity');

const expectedFields = [
  'id',
  'productid',
  'transaction_id',
  'quantity',
  'subscription_active',
];

describe('Product_Quantity Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('Product_Quantity');

  // it('should contain expected properties', () => {
  expectedFields.forEach(checkPropertyExists(example));
  // });
});
