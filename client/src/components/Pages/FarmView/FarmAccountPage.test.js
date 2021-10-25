import React from 'react';
import Component from './FarmAccountPage.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<FarmAccountPage />', () => {
  let container;

  beforeEach(() => {
    container = render(<Component />).container;
  });

  it('renders without throwing errors', () => {
    expect(screen).toBeTruthy();
  });
});
