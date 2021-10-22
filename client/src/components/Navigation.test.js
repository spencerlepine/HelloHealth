import React from 'react';
import Navigation from './Navigation.jsx';

import { render, screen, fireEvent } from '../../test-utils';

describe('<Navigation />', () => {
  beforeEach(() => {
    render(<Navigation />);
  });

  it('renders the three navigation buttons', () => {
    const buttons = screen.getAllByRole('button');
    const names = ['box', 'farms', 'account', 'cart'];
    buttons.forEach((item, i) => {
      expect(item.name).toBe(names[i]);
    });
  });
});
