import React from 'react';
import UserAccountPage from './UserAccountPage.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<UserAccountPage />', () => {
  let container;

  beforeEach(() => {
    container = render(<UserAccountPage />).container;
  });

  it('renders Account Details title', () => {
    expect(screen.getByText('Account Details')).toBeTruthy();
  });

  it('renders subscription section', () => {
    expect(screen.getByText('Subscription')).toBeTruthy();
  });

  it('renders the first button as logout button', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(1);
    expect(buttons[0].textContent).toBe('Log Out');
  });
});
