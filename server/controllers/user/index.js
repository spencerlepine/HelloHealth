const axios = require('axios');
const { QueryTypes } = require('sequelize');
const config = require('../../config/config');
const { sequelize } = require('../../database');

const database = require('../../database');

const UserModel = database.customers;

const strToInt = (s) => {
  if (typeof s === 'string') {
    Number.parseFloat(str.replace('$', ''));
  } else if (typeof s === 'string') {
    return s;
  }
  return JSON.stringify(s);
};

function updateOrCreate(model, where, newItem) {
  // First try to find the record
  return model.findOne({ where }).then((foundItem) => {
    if (!foundItem) {
      // Item not found, create a new one
      return model.create(newItem).then((item) => ({ item, created: true }));
    }
    // Found an item, update it
    return model
      .update(newItem, { where })
      .then((item) => ({ item, created: false }));
  });
}

module.exports = {
  getUserAccountType: (req, res) => {
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid endpoint parameters "&userId=12345"');
      return;
    }

    const { userId } = req.query;

    UserModel.findOne({ id: userId })
      .then((foundItem) => {
        const type = foundItem
          ? foundItem.customer_type || 'customer'
          : 'customer';
        res.status(200).json(type);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  getAccountDetails: (req, res) => {
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid endpoint parameters "&userId=12345"');
      return;
    }
    const { userId } = req.query;

    UserModel.findOne(
      // { id: userId }
      { where: { id: userId } },
    )
      .then((foundItem) => {
        res.status(200).json(foundItem);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  updateUserAccountType: (req, res) => {
    const { accountType, userId } = req.body;

    const newObj = {
      customer_type: accountType,
      user_id: userId,
      id: userId,
      email: `${userId}@gmail.com`,
      'first name': 'John',
      'last name': 'Doe',
      Address: 'Sample Address',
      City: 'Seattle',
      State: 'WA',
      'Zip Code': '98109',
      'referral code': '12098214',
      referral_code_used: false,
      first_purchase_complete: false,
      credit_available: 50,
    };

    updateOrCreate(UserModel, { id: userId }, newObj)
      .then((result) => {
        res.status(201).json(accountType);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  updateAccountDetails: (req, res) => {
    const newObj = { ...req.body };
    newObj.credit_available = strToInt(req.body.credit_available);
    newObj.referral_code_used = !!req.body.referral_code_used;

    updateOrCreate(UserModel, { id: req.body.user_id }, newObj)
      .then(() => {
        res.status(201).json(req.body);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  updateSubscription: (req, res) => {
    const { userId, newStatus } = req.body;

    UserModel.update(
      { subscription_status: newStatus },
      { where: { id: userId } },
    )
      .then((result) => res.status(201).json(newStatus))
      .catch((err) => res.status(500).send(err));
  },
  getAllTransactions: (req, res) => {
    const { userId } = req.query;

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

    database.transactions
      .findAll({ user_id: userId })
      .then((transactions) => {
        // HERE
        const trans =
          transactions.length === 0 ? mockTransactions : transactions;
        res.status(200).json(trans);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  getTransaction: (req, res) => {
    const { transactionId } = req.query;

    database.transactions
      .findOne({ id: transactionId })
      .then((transaction) => {
        res.status(200).json(transaction);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  updateTransaction: (req, res) => {
    const { transactionId } = req.query;

    database.transactions
      .update(newItem, { id: transactionId })
      .then((item) => {
        res.status(201).json(item);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  postTransaction: async (req, res) => {
    const {
      id, userId, cost, orderDate,
    } = req.body;
    try {
      const queryString = `INSERT INTO transactions (id, customer_id, cost, order_date) VALUES ('${id}', '${userId}', '${cost}', '${orderDate}')`;
      const result = await sequelize.query(queryString, {
        type: QueryTypes.INSERT,
      });
      res.status(201).send('Success');
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.findAll();
      res.status(201).json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getChat: async (req, res) => {
    const { id } = req.query;
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
