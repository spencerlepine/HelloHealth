import axios from 'axios';
import endpointMiddleware from '../endpointMiddleware';

export const uploadUserAccountType = (typeString, callback = () => {}) => {
  endpointMiddleware(
    ['USER', 'ACCOUNT_TYPE'],
    {
      accountType: typeString,
    },
    'POST'
  ).then((res) => {
    // HERE, decide how to handle account type result
    console.log(res);
    callback(res);
  });
};

export const fetchUserAccountType = (userId, callback = () => {}) => {
  endpointMiddleware(
    ['USER', 'ACCOUNT_TYPE'],
    {
      params: {
        userId,
      },
    },
    'GET'
  ).then((res = {}) => {
    callback(res.data);
  });
};

export const fetchAccountDetails = (userId, callback = () => {}) => {
  endpointMiddleware(
    ['USER', 'ACCOUNT_DETAILS'],
    {
      params: {
        userId,
      },
    },
    'GET'
  ).then((res = {}) => {
    callback(res.data);
  });
};

export const updateAccountDetails = (
  userId,
  accountObj,
  callback = () => {}
) => {
  // console.log(accountObj);
  endpointMiddleware(
    ['USER', 'ACCOUNT_DETAILS'],
    {
      ...accountObj,
      userId,
      params: {
        userId,
      },
    },
    'POST'
  ).then((res = {}) => {
    callback(res.data);
  });
};

export const updateSubscription = (userId, newStatus, callback = () => {}) => {
  endpointMiddleware(
    ['USER', 'SUBSCRIPTION_STATUS'],
    {
      userId,
      newStatus,
    },
    'POST'
  ).then((res = {}) => {
    callback(res.data);
  });
};

export const fetchAccountTransactions = (userId, callback = () => {}) => {
  endpointMiddleware(
    ['USER', 'TRANSACTION', 'ALL_TRANSACTIONS'],
    {
      params: {
        userId,
      },
    },
    'GET'
  ).then((res = {}) => {
    callback(res.data);
  });
};
