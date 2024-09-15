import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';
import { Service } from './Service';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

const mockData = [
  { id: 1, title: 'Post 1', body: 'This is the body of post 1' },
  { id: 2, title: 'Post 2', body: 'This is the body of post 2' },
  { id: 3, title: 'Post 3', body: 'This is the body of post 3' },
  { id: 4, title: 'Post 4', body: 'This is the body of post 4' },
  { id: 5, title: 'Post 5', body: 'This is the body of post 5' },
  { id: 6, title: 'Post 6', body: 'This is the body of post 6' },
];

describe('Service', () => {
  it('renders the Service component', () => {
    render(<Service data={mockData} />);
    expect(screen.getByText('Blog Service')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });

  it('toggles the dropdown menu when the filter button is clicked', () => {
    render(<Service data={mockData} />);
    const filterButton = screen.getByRole('button', { name: /filter/i });
    fireEvent.click(filterButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    fireEvent.click(filterButton);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('navigates to the correct post when a post is clicked', () => {
    render(<Service data={mockData} />);
    const postButton = screen.getByRole('button', { name: /post 1/i });
    fireEvent.click(postButton);
    expect(mockPush).toHaveBeenCalledWith('/posts/1');
  });

  it('renders the correct number of posts per page', () => {
    render(<Service data={mockData} />);
    const posts = screen.getAllByRole('button', { name: /post/i });
    expect(posts).toHaveLength(5);
  });
});
