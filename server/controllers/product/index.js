const axios = require('axios');
const { QueryTypes } = require('sequelize');
const config = require('../../config/config');
const { sequelize } = require('../../database');

module.exports = {
  getProductInfo: async (req, res) => {
    const cartArray = JSON.parse(req.query.cartArray || '""');
    let queryString = 'SELECT id, product_name, product_cost, product_image FROM products where';
    for (let i = 0; i < cartArray.length; i += 1) {
      queryString += ` id=${cartArray[i]} or`;
    }
    queryString = queryString.substring(0, queryString.length - 2);
    try {
      const result = await sequelize.query(queryString, {
        type: QueryTypes.SELECT,
      });
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
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
  // getProductRating: async (req, res) => {
  //   // need to test below variable definition based on req.query
  //   const productId = req.query.id;
  //   try {
  //     const queryString = `SELECT product_rating FROM products WHERE id = ${productId}`;
  //     const result = await sequelize.query(queryString, {
  //       type: QueryTypes.SELECT,
  //     });
  //     res.status(201).send(result);
  //   } catch (err) {
  //     res.status(400).send(err);
  //   }
  // },
  addProductRating: async (req, res) => {
    const productId = req.body.id;
    const totalAllRatings = Number(req.body.product_rating) * Number(req.body.reviews_count);
    const newReviewsCount = Number(req.body.reviews_count) + 1;
    let { custRating } = req.body;
    custRating = Number(custRating);
    const newRating = (totalAllRatings + custRating) / newReviewsCount;
    try {
      const queryString = `
        UPDATE products
        SET product_rating = '${newRating.toFixed(2)}',
          reviews_count='${newReviewsCount}'
        WHERE id=${productId}
      `;
      const result = await sequelize.query(queryString, {
        type: QueryTypes.INSERT,
      });
      res.status(201).send('Success');
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
