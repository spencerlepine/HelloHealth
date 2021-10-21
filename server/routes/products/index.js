const express = require('express');
const {
  getProductInfo,
  getProductPage,
} = require('../../controllers/products');

const router = express.Router();

router.get('/', getProductPage);
router.get('/info', getProductInfo);
router.post('/info', getProductInfo);

module.exports = router;
