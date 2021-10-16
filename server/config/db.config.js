const config = require('./config');

module.exports = {
  DATABASE_URL: config.DATABASE_URL,
  dialect: 'postgres',
  // max: 10, // Pool max size
  idleTimeoutMillis: 1000, // Close idle clients after 1 second
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
