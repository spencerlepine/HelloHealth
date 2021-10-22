const express = require('express');
const {
  getAllFarms,
  getOneFarm,
  // getFarmProducts,
  getProductFacts,
  addProduct,
  updateProduct,
  updateFarm,
  deleteProduct,
} = require('../../controllers/farms');

const router = express.Router();

router.get('/farms', getAllFarms);
router.get('/one-farm/:id', getOneFarm);
router.get('/facts/:id', getProductFacts);
router.post('/addProducts', addProduct);
router.post('/updateProducts', updateProduct);
router.post('/updateFarm', updateFarm);
router.delete('/deleteProducts/:id', deleteProduct);
// router.get('/get-products', getFarmProducts);

module.exports = router;
