const routes = {
  USER: {
    ENDPOINT: '/user',
    SUBSCRIPTION_STATUS: {
      ENDPOINT: '/subscription-status',
      METHOD: 'POST',
      BODY: {
        userId: String,
        newStatus: Boolean,
      },
    },
    ACCOUNT_TYPE: {
      ENDPOINT: '/account-type',
      METHOD: ['GET', 'POST'],
      BODY: {
        accountType: ['customer', 'farmer', 'nutritionist', undefined],
      },
      PARAMS: {
        userId: String,
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
      PARAMS: {
        userId: String,
      },
    },
    TRANSACTION: {
      ENDPOINT: '/transaction',
      PARAMS: {
        transactionId: [String, Number],
      },
      METHOD: ['POST', 'GET'],
      BODY: {
        customer_id: Number,
        cost: Number,
        order_date: String,
      },
      ALL_TRANSACTIONS: {
        ENDPOINT: '/all',
        PARAMS: {
          userId: [String, Number],
        },
        METHOD: 'GET',
      },
    },
  },
};

export default routes;
