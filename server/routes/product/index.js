const express = require('express');
const {
  getProductInfo,
  getProductCount,
  getProductList,
} = require('../../controllers/product');

const router = express.Router();

router.get('/CartInfo', getProductInfo);
router.get('/total', getProductCount);
router.get('/list', getProductList);

module.exports = router;
