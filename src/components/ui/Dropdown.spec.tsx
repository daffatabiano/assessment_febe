import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const mockFilter = jest.fn();

  const renderDropdown = (open: boolean) => {
    render(<Dropdown open={open} filter={mockFilter} />);
  };

  it('renders the Dropdown component when open', () => {
    renderDropdown(true);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('does not render the Dropdown component when closed', () => {
    renderDropdown(false);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('calls filter function when a button is clicked', () => {
    renderDropdown(true);
    const button = screen.getByRole('menuitem', { name: /Short Title/i });
    fireEvent.click(button);
    expect(mockFilter).toHaveBeenCalled();
  });
});
