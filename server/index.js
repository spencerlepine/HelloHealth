const config = require('./config/config');
const server = require('./server');
const routes = require('./routes');

// Vite Setup Goes here ...

// server.listen(process.env.DEV_PORT, () => {
//   console.log(Server is currently listening on http://localhost:${process.env.DEV_PORT});
// });

server.use(routes);

const SERVER_PORT = config.SERVER_PORT || 8001;

if (config.NODE_ENV !== 'test') {
  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
}

module.exports.server = server;
