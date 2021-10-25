import React from 'react';
import Component from './FarmAdminPage.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<FarmAdminPage />', () => {
  let container;

  beforeEach(() => {
    container = render(<Component />).container;
  });

  it('renders without throwing errors', () => {
    expect(screen).toBeTruthy();
  });
});
