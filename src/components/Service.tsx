import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Pagination from './ui/Pagination';
import { useRouter } from 'next/navigation';

const Service = ({ data }: serviceProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(data?.length / postsPerPage);
  const { push } = useRouter();

  const currentPosts = data.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div id="service" className="w-full flex-col flex px-8 pt-24">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-bold text-zinc-950 dark:text-white">
          Blog Service
        </h1>
        <button className="bg-transparent rounded-full text-zinc-950 dark:text-white flex w-28   justify-center items-center py-2 border-2 border-zinc-950 dark:border-white">
          <span className="mr-2">
            <FaFilter />
          </span>{' '}
          Filter
        </button>
      </div>
      <div className="  m-2 mt-8">
        <ul className="w-full flex justify-center items-center flex-col gap-4 mb-4 md:gap-4">
          {currentPosts?.map((item, i) => (
            <li
              key={i}
              id={`post-${i}`}
              onClick={() => push(`/posts/${item.id}`)}
              className="text-zinc-950 dark:text-white md:w-1/2 p-4 flex flex-col gap-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 shadow-sm shadow-zinc-950 dark:shadow-white hover:transform hover:scale-105 md:hover:translate-x-6">
              <h1 className="font-bold text-lg capitalize">{item?.title}</h1>
              <p className="text-sm font-light">{item.body}</p>
            </li>
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export { Service };
