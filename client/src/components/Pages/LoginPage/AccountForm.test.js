import React from 'react';
import AccountForm from './AccountForm.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<AccountForm />', () => {
  let container;

  beforeEach(() => {
    container = render(<AccountForm />).container;
  });

  it('renders the alternate account sign in button', () => {
    expect(screen.getByText('Sign In With Google')).toBeTruthy();
    expect(screen.getByText('Sign In With Facebook')).toBeTruthy();
    // expect(screen.getByText('Sign In With Twitter')).toBeTruthy();
  });

  it('renders the continue button', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(1);
    expect(buttons[0].textContent).toBe('Continue');
  });
});
