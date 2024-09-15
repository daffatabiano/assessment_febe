/* eslint-disable @typescript-eslint/no-unused-vars */
interface NavbarProps {
  id: number;
  title: string;
  path: string;
}

interface detailProps {
  post: {
    title: string;
    body: string;
  };
  comments: {
    id: number;
    email: string;
    name: string;
    body: string;
  }[];
}

interface serviceProps {
  data: {
    id?: number;
    title: string;
    body: string;
    userId?: number;
  }[];
}

interface pageNumber {
  generatePageNumbers: (currentPage: number, totalPages: number) => number[];
}

interface formTypeProps {
  placeholder?: string;
  name: string;
  className?: string;
  type?: string;
}
