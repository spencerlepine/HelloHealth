/*
 * Use "joi" library to verify
 * enviroment variables exists
 * and match expected value/type
 */

const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    SERVER_PORT: Joi.number(),
    DATABASE_URL: Joi.string().required().description('PostgreSQL connection string'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  NODE_ENV: envVars.NODE_ENV,
  SERVER_PORT: envVars.SERVER_PORT,
  DATABASE_URL: envVars.DATABASE_URL,
};
