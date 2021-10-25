import React from 'react';
import Component from './AddProduct.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<AddProduct />', () => {
  let container;

  beforeEach(() => {
    container = render(<Component />).container;
  });

  it('renders without throwing errors', () => {
    expect(screen).toBeTruthy();
  });
});
