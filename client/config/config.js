import dotenv from 'dotenv';

dotenv.config();

const config = {
  DATABASE_URL: process.env.DATABASE_URL,
  FIREBASE_CONFIG: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  },
};

export default config;
