import React from 'react';
import App from './App.jsx';
import {
  render, screen, fireEvent, getByLabelText,
} from '../../test-utils';

// jest.mock('./HelloHealth.svg');

describe('<App />', () => {
  // beforeEach(() => {
  //   render(<App />);
  // });

  it('Shows renders without an error', () => {
    render(<App />);
  });
});
