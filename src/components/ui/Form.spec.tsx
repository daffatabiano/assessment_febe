import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';

describe('Form', () => {
  const mockOnSubmit = jest.fn();

  const renderForm = (loading: boolean) => {
    render(<Form onSubmit={mockOnSubmit} loading={loading} />);
  };

  it('renders the Form component', () => {
    renderForm(false);
    expect(screen.getByLabelText('name')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByLabelText('message')).toBeInTheDocument();
  });

  it('calls onSubmit when the form is submitted', () => {
    renderForm(false);
    fireEvent.change(screen.getByLabelText('name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('message'), {
      // Use improved selector
      target: { value: 'Hello!' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('disables the submit button when loading', () => {
    renderForm(true);
    expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();
  });
});
