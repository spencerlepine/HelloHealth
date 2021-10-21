const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ExampleModel = require('./messages');

const expectedFields = [
  'id',
  'user_id',
  'email',
  'name',
  'zip_code',
  'description',
  'profile_image',
  'farm_rating',
  'video_link',
];

describe('Messages Model', () => {
  const Example = ExampleModel(sequelize, dataTypes);
  const example = new Example();

  checkModelName(Example)('messages');

  // it('should contain expected properties', () => {
  expectedFields.forEach(checkPropertyExists(example));
  // });
});
