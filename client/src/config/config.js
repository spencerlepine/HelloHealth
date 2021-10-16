/*
 * Use "joi" library to verify
 * enviroment variables exists
 * and match expected value/type
 */

import Joi from 'joi';

const envVarsSchema = Joi.object()
  .keys({
    SERVER_URL: Joi.string().default('http://localhost:8001'),
    VITE_APP_FIREBASE_apiKey: Joi.string().required(),
    VITE_APP_FIREBASE_authDomain: Joi.string().required(),
    VITE_APP_FIREBASE_projectId: Joi.string().required(),
    VITE_APP_FIREBASE_storageBucket: Joi.string().required(),
    VITE_APP_FIREBASE_messagingSenderId: Joi.string().required(),
    VITE_APP_FIREBASE_appId: Joi.string().required(),
    VITE_APP_FIREBASE_measurementId: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(import.meta.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  SERVER_URL: envVars.SERVER_URL,
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
