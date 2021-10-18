import React from 'react';
import App from './App.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../test-utils';

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('then shows the light theme by default', () => {
    expect(screen.getByText(/HelloHealth/i)).toBeTruthy();
  });
});
