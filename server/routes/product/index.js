const express = require('express');
const { getProductInfo } = require('../../controllers/product');

const router = express.Router();


router.get('/CartInfo', getProductInfo);


module.exports = router;
