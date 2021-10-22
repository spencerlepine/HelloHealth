/*
 * Use "joi" library to verify
 * enviroment variables exists
 * and match expected value/type
 */

import Joi from 'joi';

let enviromentObj;

try {
  enviromentObj = process.env;
} catch {
  enviromentObj = import.meta.env;
}

const envVarsSchema = Joi.object()
  .keys({
    VITE_NODE_ENV: Joi.string().default('development'),
    VITE_SERVER_URL: Joi.string().default('http://localhost:8001'),
    VITE_APP_FIREBASE_apiKey: Joi.string().default('placeholderAPIKey'),
    VITE_APP_FIREBASE_authDomain: Joi.string(),
    VITE_APP_FIREBASE_projectId: Joi.string(),
    VITE_APP_FIREBASE_storageBucket: Joi.string(),
    VITE_APP_FIREBASE_messagingSenderId: Joi.string(),
    VITE_APP_FIREBASE_appId: Joi.string(),
    VITE_APP_FIREBASE_measurementId: Joi.string(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(enviromentObj);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  NODE_ENV: envVars.NODE_ENV,
  SERVER_URL: envVars.VITE_SERVER_URL,
  firebaseConfig: {
    apiKey: envVars.VITE_APP_FIREBASE_apiKey,
    authDomain: envVars.VITE_APP_FIREBASE_authDomain,
    projectId: envVars.VITE_APP_FIREBASE_projectId,
    storageBucket: envVars.VITE_APP_FIREBASE_storageBucket,
    messagingSenderId: envVars.VITE_APP_FIREBASE_messagingSenderId,
    appId: envVars.VITE_APP_FIREBASE_appId,
    measurementId: envVars.VITE_APP_FIREBASE_measurementId,
  },
};

export default config;
