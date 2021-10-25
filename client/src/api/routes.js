/* istanbul ignore next */

const routes = {
  PRODUCTS: {
    ENDPOINT: '/products',
    PARAMS: {
      page: Number,
      count: Number,
    },
    METHOD: 'GET',
    BODY: {
      customer_id: Number,
      cost: Number,
      order_date: String,
    },
    INFO: {
      ENDPOINT: '/info',
      PARAMS: {
        productId: [Number, String],
      },
      BODY: {
        id: Number,
        product_image: String,
        product_name: String,
        product_cost: String,
        product_inventory: Number,
        product_rating: Number,
        product_desription: String,
      },

      METHOD: ['GET', 'POST'],
    },
  },
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
    ALL: {
      ENDPOINT: '/all',
      METHOD: ['GET'],
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
        id: String,
        customer_type: ['farmer', 'customer', 'nutritionist'],
        user_id: [String, undefined],
        email: String,
        'first name': String,
        'last name': String,
        Address: String,
        City: String,
        State: String,
        'Zip Code': String,
        'referral code': String,
        referral_code_used: Boolean,
        first_purchase_complete: Boolean,
        credit_available: String,
      },
      PARAMS: {
        userId: [String, undefined],
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
