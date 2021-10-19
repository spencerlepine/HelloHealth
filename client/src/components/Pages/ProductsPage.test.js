import React from 'react';
import ProductsPage from './ProductsPage.jsx';

import { render, screen, fireEvent } from '../../../test-utils';

describe('<ProductsPage />', () => {
  beforeEach(() => {
    render(<ProductsPage />);
  });

  it('renders the correct title for the page', () => {
    expect(screen.getByText(/Products Page > 1/i)).toBeTruthy();
  });

  // it('checks for state change onClick of pagination', async () => {
  //   const button = screen.getByTestId('NavigateNextIcon');
  //   await fireEvent.click(button);
  //   expect(screen.getByText(/Products Page > 2/i)).toBeTruthy();
  // });
});
