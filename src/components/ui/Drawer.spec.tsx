import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Drawer from './Drawer';

describe('Drawer', () => {
  const mockSetIsOpen = jest.fn();
  const mockToggleDarkMode = jest.fn();

  const renderDrawer = (isOpen: boolean, darkMode: boolean) => {
    render(
      <Drawer
        isOpen={isOpen}
        setIsOpen={mockSetIsOpen}
        darkMode={darkMode}
        toggleDarkMode={mockToggleDarkMode}>
        <div>Drawer Content</div>
      </Drawer>
    );
  };

  it('renders the Drawer component', () => {
    renderDrawer(true, false);
    expect(screen.getByText('Drawer Content')).toBeInTheDocument();
  });

  it('toggles dark mode', () => {
    renderDrawer(true, false);
    const toggleButton = screen.getByLabelText('Toggle dark mode');
    fireEvent.click(toggleButton);
    expect(mockToggleDarkMode).toHaveBeenCalled();
  });
});
