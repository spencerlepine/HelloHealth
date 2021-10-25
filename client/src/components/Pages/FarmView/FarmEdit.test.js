import React from 'react';
import Component from './FarmEdit.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<FarmEdit />', () => {
  let container;

  beforeEach(() => {
    container = render(<Component />).container;
  });

  it('renders without throwing errors', () => {
    expect(screen).toBeTruthy();
  });
});
