import { generatePageNumbers, links, navLinks } from '.';

describe('generatePageNumbers', () => {
  it('returns all page numbers when totalPages is less than or equal to maxPagesToShow', () => {
    const result = generatePageNumbers(1, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('returns correct page numbers when currentPage is at the beginning', () => {
    const result = generatePageNumbers(2, 10);
    expect(result).toEqual([1, 2, 3, '...', 10]);
  });

  it('returns correct page numbers when currentPage is at the end', () => {
    const result = generatePageNumbers(9, 10);
    expect(result).toEqual([1, '...', 8, 9, 10]);
  });

  it('returns correct page numbers when currentPage is in the middle', () => {
    const result = generatePageNumbers(5, 10);
    expect(result).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });
});

describe('navLinks', () => {
  it('contains correct number of links', () => {
    expect(navLinks).toHaveLength(4);
  });

  it('contains correct link titles and paths', () => {
    expect(navLinks).toEqual([
      { id: 1, title: 'Home', path: '/' },
      { id: 2, title: 'About', path: '#about' },
      { id: 3, title: 'Service', path: '#service' },
      { id: 4, title: 'Contact', path: '/contact' },
    ]);
  });
});

describe('links', () => {
  it('contains BASE_URL_API', () => {
    expect(links.BASE_URL_API).toBe(process.env.NEXT_PUBLIC_BASE_URL_API);
  });
});
