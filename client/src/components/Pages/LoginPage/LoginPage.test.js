import React from 'react';
import LoginPage from './LoginPage.jsx';
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from '../../../../test-utils';

describe('<Page />', () => {
  beforeEach(() => {
    render(<LoginPage />);
  });

  it('renders a button', () => {
    // "Use Dark Theme" text is only shown when the light theme is active
    expect(screen.getByText('Sign In With Google')).toBeTruthy();
  });

  // describe("when page is initialized", () => {
  //   it("then shows the light theme by default", () => {
  //     // "Use Dark Theme" text is only shown when the light theme is active
  //     expect(screen.getByText(/Use Dark Theme/i)).toBeTruthy();
  //   });
  // });

  // describe("when the toggle theme button is clicked", () => {
  //   beforeEach(() => {
  //     userEvent.click(screen.getByText(/Use Dark Theme/i));
  //   });

  //   it("then uses the dark theme", () => {
  //     // "Use Light Theme" text is only shown when the dark theme is active
  //     expect(screen.getByText(/Use Light Theme/i)).toBeTruthy();
  //   });
  // });
});
