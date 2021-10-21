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
  // getProductRating: async (req, res) => {
  //   console.log('get product req.query', req.query);
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
