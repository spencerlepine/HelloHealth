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
  'first_name',
  'last_name',
  'address',
  'city',
  'state',
  'zip_code',
  'referral_code',
  'referral_code_used',
  'first_purchase_complete',
  'credit_available',
  'nutritionist_status',
];

describe('Customers Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('Customers');

  describe('should contain expected properties', () => {
    expectedFields.forEach(checkPropertyExists(example));
  });
});
