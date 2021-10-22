const express = require('express');
const userRouter = require('./user');
const productsRouter = require('./products');
const apiSchema = require('../controllers/apiSchema');
const productRouter = require('./product');
const farmRouter = require('./farmers');

const router = express.Router();

router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/product', productRouter);
router.use('/farmers', farmRouter);

router.all('/*', apiSchema.returnAPISchema);

module.exports = router;
