import React from 'react';
import Component from './FarmCard.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<FarmCard />', () => {
  let container;

  beforeEach(() => {
    container = render(<Component />).container;
  });

  it('renders without throwing errors', () => {
    expect(screen).toBeTruthy();
  });
});
