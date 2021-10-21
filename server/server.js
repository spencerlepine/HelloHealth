const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// check server connection
server.use('/hello', (req, res) => {
  res.status(200).send('Hello to you too.');
});

module.exports = server;
