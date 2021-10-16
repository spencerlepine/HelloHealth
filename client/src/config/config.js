/*
 * Use "joi" library to verify
 * enviroment variables exists
 * and match expected value/type
 */

import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envVarsSchema = Joi.object()
  .keys({
    SERVER_URL: Joi.string().default('http://localhost:8000'),
    REACT_APP_FIREBASE_apiKey: Joi.string().required(),
    REACT_APP_FIREBASE_authDomain: Joi.string().required(),
    REACT_APP_FIREBASE_projectId: Joi.string().required(),
    REACT_APP_FIREBASE_storageBucket: Joi.string().required(),
    REACT_APP_FIREBASE_messagingSenderId: Joi.string().required(),
    REACT_APP_FIREBASE_appId: Joi.string().required(),
    REACT_APP_FIREBASE_measurementId: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  SERVER_URL: envVars.SERVER_URL,
  firebaseConfig: {
    apiKey: envVars.REACT_APP_FIREBASE_apiKey,
    authDomain: envVars.REACT_APP_FIREBASE_authDomain,
    projectId: envVars.REACT_APP_FIREBASE_projectId,
    storageBucket: envVars.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: envVars.REACT_APP_FIREBASE_messagingSenderId,
    appId: envVars.REACT_APP_FIREBASE_appId,
    measurementId: envVars.REACT_APP_FIREBASE_measurementId,
  },
};

export default config;
