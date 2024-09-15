const navLinks: NavbarProps[] = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'About',
    path: '#about',
  },
  {
    id: 3,
    title: 'Service',
    path: '#service',
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact',
  },
];

const generatePageNumbers: (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentPage: any,
  totalPages: number
) => number[] = (currentPage, totalPages) => {
  const pageNumbers = [];
  const maxPagesToShow = 5;

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
      );
    }
  }

  return pageNumbers;
};

const links = {
  BASE_URL_API: process.env.NEXT_PUBLIC_BASE_URL_API,
};

export { navLinks, generatePageNumbers, links };
