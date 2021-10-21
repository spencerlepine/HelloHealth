const axios = require('axios');
const { QueryTypes } = require('sequelize');
const config = require('../../config/config');
const { sequelize } = require('../../database');

module.exports = {
  getProductInfo: (req, res) => {
    const data = {
      id: 123,
      product_image:
        'https://i.kym-cdn.com/photos/images/newsfeed/001/879/958/fb1.gif',
      product_name: 'JamCat',
      product_cost: '$14.99',
      product_inventory: 345,
      product_rating: 4,
      product_desription: 'this is a description',
      farm_id: 1,
      reviews_count: 20,
    };
    res.status(200).json([data]);

  },
  getProductCount: async (req, res) => {
    try {
      const queryString = 'SELECT count(*) FROM products';
      const result = await sequelize.query(queryString, {
        type: QueryTypes.SELECT,
      });
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getProductList: async (req, res) => {
    const { start, end } = req.query;
    try {
      const queryString = `SELECT * FROM products WHERE id BETWEEN ${start} AND ${end}`;
      const result = await sequelize.query(queryString, {
        type: QueryTypes.SELECT,
      });
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
