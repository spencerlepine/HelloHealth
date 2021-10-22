import axios from 'axios';
import endpointMiddleware from '../endpointMiddleware';

export const uploadUserAccountType = (
  userId,
  typeString,
  callback = () => {},
) => {
  endpointMiddleware(
    ['USER', 'ACCOUNT_TYPE'],
    {
      accountType: typeString,
      userId,
      params: {
        userId,
      },
    },
    'POST',
  ).then((res) => {
    if (res) {
      callback(res.data);
    }
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
    'GET',
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
    'GET',
  ).then((res = {}) => {
    callback(res.data);
  });
};

export const updateAccountDetails = (
  userId,
  accountObj,
  callback = () => {},
) => {
  endpointMiddleware(
    ['USER', 'ACCOUNT_DETAILS'],
    {
      ...accountObj,
      userId,
      params: {
        userId,
      },
    },
    'POST',
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
    'POST',
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
    'GET',
  ).then((res = {}) => {
    callback(res.data);
  });
};
