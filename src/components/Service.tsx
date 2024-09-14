import { FaFilter } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="w-full flex px-4 pt-24">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-bold text-zinc-950 dark:text-white">
          List Service
        </h1>
        <button className="bg-transparent rounded-full text-zinc-950 dark:text-white flex w-28   justify-center items-center py-2 border-2 border-zinc-950 dark:border-white">
          <span className="mr-2">
            <FaFilter />
          </span>{' '}
          Filter
        </button>
      </div>
    </div>
  );
};

export { Service };
