import React from 'react';
import ProductCardView from './ProductCardView.jsx';

import { render, screen, fireEvent } from '../../../../test-utils';

describe('<ProductCardView />', () => {
  const product = {
    id: 35,
    product_name: 'Pineapple - Canned, Rings',
    product_description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    product_cost: '$23.36',
    product_inventory: 41,
    product_image: 'http://dummyimage.com/111x100.png/cc0000/ffffff',
    product_rating: 4,
    farm_id: 57,
  };
  beforeEach(() => {
    render(<ProductCardView product={product} />);
  });

  it('renders the correct title for the page', () => {
    expect(screen.getByText(/Pineapple - Canned, Rings/i)).toBeTruthy();
  });
});
