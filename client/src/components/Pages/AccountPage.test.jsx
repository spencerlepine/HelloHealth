import React from 'react';
import AccountPage from './AccountPage.jsx';
import UserAccountPage from './UserAccountPage/UserAccountPage.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../test-utils';

describe('<AccountPage />', () => {
  let container;

  beforeEach(() => {
    container = render(<AccountPage />).container;
  });

  it('renders UserAccountPage by default', () => {
    expect(screen.getByText('Account Details')).toBeTruthy();
  });
});
