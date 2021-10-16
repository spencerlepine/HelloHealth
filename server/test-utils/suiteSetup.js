/*
 * Note: Sequelize will use <rootDir>/config.json
 */

const { sequelize } = require('../database');
const server = require('../index');

// Close the entire Sequalize Connection after ALL tests
// https://stackoverflow.com/questions/60217417/jest-tests-hang-due-to-open-sequelize-connections/60267873#60267873
afterAll(() => {
  sequelize.close();
  if (server.close) {
    server.close((err) => {
      console.log('server closed');
      process.exit(err ? 1 : 0);
    });
  }
});
