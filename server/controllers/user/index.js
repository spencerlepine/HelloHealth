const axios = require('axios');
const { QueryTypes } = require('sequelize');
const config = require('../../config/config');
const { sequelize } = require('../../database');

// const fetch = (req, res, url, params, data, method) => (
//   axios
//     .request({
//       ...options,
//       params,
//       data,
//       // url: `${spoonacularURL}${url}?apiKey=${apiKey}`,
//       url: `${baseURL}${url}`,
//       method,
//     })
//     .then((response) => response.data)
//     .catch((err) => {
//       res.status(500).send(err);
//     })
// );

module.exports = {
  getUserAccountType: (req, res) => {
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid endpoint parameters');
      return;
    }

    const { userId } = req.query;

    // HERE
    res.status(200).json('farmer');

    // UserModel.find({ userId })
    //   .then((items) => {
    //     res.status(200).json(items);
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //     console.error(`Failed to find documents: ${err}`);
    //   });
  },
  getAccountDetails: (req, res) => {
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid endpoint parameters');
      return;
    }
    const { userId } = req.query;

    // HERE
    res.status(200).json({
      subscription_status: true,
      referral_code: 91248,
      credit_available: 20.0,
    });

    // UserModel.find({ userId })
    //   .then((items) => {
    //     res.status(200).json(items);
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //     console.error(`Failed to find documents: ${err}`);
    //   });
  },
  updateSubscription: (req, res) => {
    const { userId, newStatus } = req.body;

    // HERE
    res.status(201).json(newStatus);
    // res.status(400).send('Invalid endpoint parameters');
  },
  getAllTransactions: (req, res) => {
    const mockTransactions = [
      {
        id: Math.round(Math.random() * 88888),
        price: `$${(Math.random() * 100).toFixed(2)}`,
      },
      {
        id: Math.round(Math.random() * 88888),
        price: `$${(Math.random() * 100).toFixed(2)}`,
      },
      {
        id: Math.round(Math.random() * 88888),
        price: `$${(Math.random() * 100).toFixed(2)}`,
      },
    ];

    // HERE
    res.status(201).send(mockTransactions);
  },
  getTransaction: (req, res) => {
    // HERE
    res.status(201).send('Success');
  },
  updateTransaction: (req, res) => {
    // HERE
    res.status(201).send('Success');
  },
  getChat: async (req, res) => {
    const { id } = req.query;
    // console.log('user_id: ', id);
    try {
      const queryString = `SELECT * FROM messages WHERE user_id='${id}'`;
      const result = await sequelize.query(queryString, {
        type: QueryTypes.SELECT,
      });
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  postChat: async (req, res) => {
    const message = JSON.stringify(req.body.message);
    const userId = req.body.user_id;
    try {
      const queryString = `INSERT INTO messages(user_id, message) VALUES ('${userId}', '${message}')`;
      const result = await sequelize.query(queryString, {
        type: QueryTypes.INSERT,
      });
      res.status(201).send('Success');
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
