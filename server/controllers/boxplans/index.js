const axios = require('axios');
const { QueryTypes, Op } = require('sequelize');
const config = require('../../config/config');
const { sequelize } = require('../../database');

const database = require('../../database');

const BoxModel = database.products;
const BoxListModel = database.box_plans;

// const strToInt = (str) => Number.parseFloat(str.replace('$', ''));

module.exports = {
  getBoxes: (req, res) => {
    // if (req.query.product_id === undefined) {
    //   res.status(400).send('Invalid endpoint parameters');
    //   return;
    // }
    // const { product_id } = req.query;

    // 9999, 10000, 10001
    BoxModel.findAll({
      where: {
        id: {
          [Op.between]: [9999, 10001],
        },
      },
    })
      .then((boxes) => {
        res.status(200).send(boxes);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },

  getItemsList: async (req, res) => {
    try {
      const queryString = `SELECT a.box_id, p.product_name, a.product_quantity, p.product_description FROM products AS p INNER JOIN box_plans as a on (a.product_id) = p.id WHERE a.box_size='${req.query.size}'`;
      const result = await sequelize.query(queryString, {
        type: QueryTypes.SELECT,
      });
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
