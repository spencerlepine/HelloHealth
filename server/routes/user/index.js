const express = require('express');
const {
  getUserAccountType,
  getAccountDetails,
  updateSubscription,
  getAllTransactions,
  getTransaction,
  updateTransaction,
} = require('../../controllers/user');

const router = express.Router();

router.get('/account-type', getUserAccountType);
router.post('/account-type', getUserAccountType);
router.get('/account-details', getAccountDetails);
router.post('/account-details', getAccountDetails);
router.post('/subscription-status', updateSubscription);
router.get('/transaction/all', getAllTransactions);
router.get('/transaction', getTransaction);
router.put('/transaction', updateTransaction);

module.exports = router;
