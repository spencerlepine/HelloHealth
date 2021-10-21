const axios = require('axios');
const config = require('../../config/config');

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
};
