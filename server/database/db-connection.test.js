/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Pool } = require('pg');
const config = require('../config/config');
const { sequelize } = require('./index');

describe('Database Connection', () => {
  it('sequelize should execute a query', (done) => {
    sequelize
      .query('SELECT NOW()')
      .then((res) => {})
      .catch((err) => err)
      .then((errorOccurred) => {
        if (errorOccurred) {
          console.log(`Connection String: ${config.DATABASE_URL}`);
        }
        expect(errorOccurred).not.toBeDefined();
        return errorOccurred;
      })
      .then(done);
  });

  // it('a pg Pool should connect', (done) => {
  //   const connectionString = process.env.DATABASE_URL;
  //   expect(connectionString).toBeDefined();

  //   const pool = new Pool({
  //     connectionString: connectionString
  //   });

  //   pool.connect()
  //     .then(client => {
  //       return client.query('SELECT CURRENT_DATE')
  //         .then(res => {
  //           client.release()
  //           expect(res.rows[0]).toBeDefined();
  //         })
  //         .catch(err => {
  //           client.release()
  //           expected(err).not.toBeDefined();
  //         })
  //         .then(done)
  //     })
  //     .catch(e => {
  //       expect(e).not.toBeDefined();
  //     })
  //     .then(done)
  // });
});
