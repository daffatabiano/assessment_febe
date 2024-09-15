import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from './Hero';

describe('Hero', () => {
  const originalOpen = window.open;
  const mockOpen = jest.fn();

  beforeAll(() => {
    window.open = mockOpen;
  });

  afterAll(() => {
    window.open = originalOpen;
  });

  it('renders the Hero component', () => {
    render(<Hero />);
    expect(screen.getByText('Next.JS Assessment FEBE')).toBeInTheDocument();
    expect(
      screen.getByText('PT. Arnawa Teknologi Informasi')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /View Portfolio/i })
    ).toBeInTheDocument();
  });

  it('opens a new window when the button is clicked', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /View Portfolio/i });
    fireEvent.click(button);
    expect(mockOpen).toHaveBeenCalledWith('https://dafportabs.vercel.app/');
  });

  it('displays the correct images based on dark mode', () => {
    render(<Hero />);
    expect(screen.getByAltText('company-logo')).toBeInTheDocument();
  });
});
