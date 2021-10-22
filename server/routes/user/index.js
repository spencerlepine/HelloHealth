const express = require('express');
const {
  getUserAccountType,
  getAccountDetails,
  updateSubscription,
  getAllTransactions,
  getTransaction,
  postTransaction,
  updateTransaction,
  getAllUsers,
  updateAccountDetails,
  getChat,
  postChat,
  updateUserAccountType,
} = require('../../controllers/user');

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/account-type', getUserAccountType);
router.post('/account-type', updateUserAccountType);
router.get('/account-details', getAccountDetails);
router.post('/account-details', updateAccountDetails);
router.post('/subscription-status', updateSubscription);
router.get('/transaction/all', getAllTransactions);
router.get('/transaction', getTransaction);
router.post('/transaction', postTransaction);
router.put('/transaction', updateTransaction);
router.get('/chat', getChat);
router.post('/chat', postChat);

module.exports = router;
