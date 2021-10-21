const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ExampleModel = require('./customers');

const expectedFields = [
  'id',
  'user_id',
  'email',
  'first name',
  'customer_type',
  'last name',
  'Address',
  'City',
  'State',
  'Zip Code',
  'referral code',
  'referral_code_used',
  'first_purchase_complete',
  'credit_available',
];

describe('Customers Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('customers');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(example));
  });
});
