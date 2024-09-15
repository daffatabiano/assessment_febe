import { useCallback, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Pagination from './ui/Pagination';
import { useRouter } from 'next/navigation';
import Dropdown from './ui/Dropdown';

const Service = ({ data }: serviceProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const postsPerPage = 5;
  const { push } = useRouter();
  const [filter, setFilter] = useState<string>('');

  const isShort = useState<number>(
    data.filter((item) => item.title.length <= 20).length
  );
  const isLong = useState<number>(
    data.filter((item) => item.title.length > 20).length
  );

  const totalPages = Math.ceil(
    filter
      ? filter === 'short'
        ? isShort[0] / postsPerPage
        : isLong[0] / postsPerPage
      : data?.length / postsPerPage
  );

  const currentPosts = filter
    ? filter === 'short'
      ? data
          .filter((item) => item.title.length <= 20)
          .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
      : filter === 'long' &&
        data
          .filter((item) => item.title.length > 20)
          .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
    : data.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  data.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handleFilter = useCallback(
    (e: string) => {
      setDropdown((prev) => !prev);
      setFilter(e);
    },
    [dropdown]
  );

  return (
    <div id="service" className="w-full flex-col flex px-8 pt-24">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-bold text-zinc-950 dark:text-white">
          Blog Service
        </h1>
        <div className="relative">
          <button
            aria-haspopup="true"
            aria-expanded={dropdown}
            aria-controls="dropdown-menu"
            type="button"
            onClick={() => setDropdown(!dropdown)}
            className="bg-transparent rounded-full text-zinc-950 dark:text-white flex w-28   justify-center items-center py-2 border-2 border-zinc-950 dark:border-white">
            <span className="mr-2">
              <FaFilter />
            </span>{' '}
            Filter
          </button>
          <Dropdown open={dropdown} filter={handleFilter} />
        </div>
      </div>
      <div className="  m-2 mt-8">
        <ul className="w-full flex justify-center items-center flex-col gap-4 mb-4 md:gap-4">
          {currentPosts?.map((item, i) => (
            <li
              key={i}
              role="button"
              id={`post-${i}`}
              aria-label={`Post ${item?.title}`}
              onClick={() => push(`/posts/${item.id}`)}
              className="text-zinc-950 dark:text-white md:w-1/2 p-4 flex flex-col gap-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 shadow-sm shadow-zinc-950 dark:shadow-white hover:transform hover:scale-105 md:hover:translate-x-6">
              <h1 className="font-bold text-lg capitalize">{item?.title}</h1>
              <p className="text-sm font-light">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center items-center pt-4">
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export { Service };
