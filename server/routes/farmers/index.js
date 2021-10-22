const express = require('express');
const {
  getAllFarms,
  getOneFarm,
  // getFarmProducts,
  getProductFacts,
} = require('../../controllers/farms');

const router = express.Router();

router.get('/farms', getAllFarms);
router.get('/one-farm/:id', getOneFarm);
router.get('/facts/:id', getProductFacts);
// router.get('/get-products', getFarmProducts);

module.exports = router;
