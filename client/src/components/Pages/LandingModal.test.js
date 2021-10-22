import React from 'react';
import LandingModal from './LandingModal.jsx';

import { render, screen, fireEvent } from '../../../test-utils';

describe('<LandingModal />', () => {
  beforeEach(() => {
    const showModal = true;
    render(<LandingModal showModal={showModal} />);
  });

  it('renders the modal with correct content', () => {
    expect(screen.getByRole('button', { name: /enter/i })).toBeTruthy();
    expect(screen.getByText(/Support Local/i)).toBeTruthy();
  });
});
