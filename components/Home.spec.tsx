import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('displays heading and title', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Welcome to Next.js!');
  });

  it('displays 4 subheadings', () => {
    render(<Home />);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4);
  });

  it('displays the footer', () => {
    render(<Home />);
    expect(screen.getByTestId('footer')).toBeDefined();
    expect(screen.getByText('Powered by')).toBeDefined();
  });
});