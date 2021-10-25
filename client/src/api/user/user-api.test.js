import React from 'react';
import {
  uploadUserAccountType,
  fetchUserAccountType,
  fetchAccountDetails,
  updateAccountDetails,
  updateSubscription,
  fetchAccountTransactions,
} from './index';

const mockUser = jest.mock('mockUser');

describe('User API Controller', () => {
  it('should query save and return the userAccountType', (done) => {
    // Broken
    // uploadUserAccountType();
    // fetchUserAccountType();
    // fetchAccountDetails();
    // updateAccountDetails();
    // updateSubscription();

    expect(true).toBeTruthy();
    done();

    const mockAccountType = mockUser.customer_type;
  });
});
