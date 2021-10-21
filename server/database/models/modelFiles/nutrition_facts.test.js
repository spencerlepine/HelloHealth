const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ExampleModel = require('./nutrition_facts');

const expectedFields = ['id', 'product_id', 'fact_type', 'fact_info'];

describe('Nutrition_Facts Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('nutrition_facts');

  // it('should contain expected properties', () => {
  expectedFields.forEach(checkPropertyExists(example));
  // });
});
