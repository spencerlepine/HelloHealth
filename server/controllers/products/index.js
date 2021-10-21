const axios = require('axios');
const config = require('../../config/config');
// const database = require('../../database');
// const UsersTable = database.

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

// UserModel.find({ userId })
//   .then((items) => {
//     res.status(200).json(items);
//   })
//   .catch((err) => {
//     res.status(500).send(err);
//     console.error(`Failed to find documents: ${err}`);
//   });

const dummyProduct = {
  id: 123,
  product_image:
    'https://i.kym-cdn.com/photos/images/newsfeed/001/879/958/fb1.gif',
  product_name: 'JamCat',
  product_cost: '$14.99',
  product_inventory: 345,
  product_rating: 4,
  product_desription: 'this is a description',
  farm_id: 1,
};

module.exports = {
  getProductInfo: (req, res) => {
    const { productId } = req.query;
    if (productId === undefined) {
      res.status(400).send('Invalid endpoint parameters');
      return;
    }

    // HERE
    res.status(200).json(dummyProduct);
  },
  getProductPage: (req, res) => {
    const { page, count } = req.query;

    const startPage = page && typeof page === 'number' ? page : 1;
    const startCount = count && typeof count === 'number' ? count : 20;

    const products = [];
    for (let i = 0; i < startCount; i += 1) {
      products.push(dummyProduct);
    }

    // HERE
    res.status(200).json(products);
    // res.status(400).send('Invalid endpoint parameters');
  },
};
