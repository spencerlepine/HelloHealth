const express = require('express');
const { getProductInfo } = require('../../controllers/product');

const router = express.Router();

router.get('/productInfo', getProductInfo);

module.exports = router;
