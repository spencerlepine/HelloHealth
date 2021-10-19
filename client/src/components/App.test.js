import React from 'react';
import App from './App.jsx';
import {
  render, screen, fireEvent, getByLabelText,
} from '../../test-utils';

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the company name', () => {
    expect(screen.getByText(/HelloHealth/i)).toBeTruthy();
  });
});
