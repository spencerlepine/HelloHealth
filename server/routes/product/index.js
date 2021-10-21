const express = require('express');
const {
  getProductInfo,
  getProductCount,
  getProductList,
  // getProductRating,
  addProductRating,
} = require('../../controllers/product');

const router = express.Router();

router.get('/CartInfo', getProductInfo);
router.get('/total', getProductCount);
router.get('/list', getProductList);
// router.get('/productRating', getProductRating);
router.post('/productRating', addProductRating);

module.exports = router;
