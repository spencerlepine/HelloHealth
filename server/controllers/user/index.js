const axios = require('axios');
const config = require('../../config/config');

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
    res.status(200).json('customer');

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
};
