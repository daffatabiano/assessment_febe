import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '@/pages/index';

describe('Page', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
