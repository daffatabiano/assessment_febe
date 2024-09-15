import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

jest.mock('../../constants', () => ({
  generatePageNumbers: jest.fn((currentPage, totalPages) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }),
}));

describe('Pagination', () => {
  const mockOnPageChange = jest.fn();

  const renderPagination = (currentPage: number, totalPages: number) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );
  };

  it('renders the Pagination component', () => {
    renderPagination(1, 5);
    expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
    expect(screen.getByLabelText('Next page')).toBeInTheDocument();
  });

  it('disables the Previous button on the first page', () => {
    renderPagination(1, 5);
    expect(screen.getByLabelText('Previous page')).toBeDisabled();
  });

  it('disables the Next button on the last page', () => {
    renderPagination(5, 5);
    expect(screen.getByLabelText('Next page')).toBeDisabled();
  });

  it('calls onPageChange with the correct page number when a page button is clicked', () => {
    renderPagination(1, 5);
    fireEvent.click(screen.getByText('3'));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with the correct page number when the Next button is clicked', () => {
    renderPagination(1, 5);
    fireEvent.click(screen.getByLabelText('Next page'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with the correct page number when the Previous button is clicked', () => {
    renderPagination(2, 5);
    fireEvent.click(screen.getByLabelText('Previous page'));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
