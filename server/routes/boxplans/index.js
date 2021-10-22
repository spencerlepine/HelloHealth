const express = require('express');
const { getBoxes, getItemsList } = require('../../controllers/boxplans');

const router = express.Router();

router.get('/getBoxes', getBoxes);
router.get('/getItemsList', getItemsList);
// router.get('/', getFarmProducts);

module.exports = router;
