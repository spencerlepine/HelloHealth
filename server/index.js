const express = require('express');
const config = require('./config/config');
const server = require('./server');

// Vite Setup Goes here ...

// server.listen(process.env.DEV_PORT, () => {
//   console.log(Server is currently listening on http://localhost:${process.env.DEV_PORT});
// });

const SERVER_PORT = config.SERVER_PORT || 6000;

if (config.NODE_ENV !== 'test') {
  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
}

module.exports.server = server;
