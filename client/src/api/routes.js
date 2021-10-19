const routes = {
  USER: {
    ENDPOINT: '/user',
    ACCOUNT_TYPE: {
      ENDPOINT: '/account-type',
      METHOD: 'POST',
      BODY: {
        accountType: ['customer', 'farmer', 'nutritionist'],
      },
    },
    ACCOUNT_DETAILS: {
      ENDPOINT: '/account-details',
      METHOD: ['GET', 'POST'],
      BODY: {
        firstName: [String, undefined],
        lastName: [String, undefined],
        address: [String, undefined],
        city: [String, undefined],
        state: [String, undefined],
        zip_code: [String, undefined],
        referall_code: [String, undefined],
        referall_code_used: [Boolean, undefined],
        first_purchase_complete: [Boolean, undefined],
        credit_available: [Number, undefined],
      },
    },
    TRANSACTION_HISTORY: {
      ENDPOINT: '/transactions',
      PARAMS: {
        transactionId: String,
      },
      METHOD: ['GET', 'POST'],
      BODY: {
        customer_id: Number,
        cost: Number,
        order_date: String,
      },
    },
  },
};

export default routes;
