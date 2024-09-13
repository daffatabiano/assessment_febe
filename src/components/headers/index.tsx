import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navLinks } from '@/constants';

export default function Navbar() {
  const [scrollY, setScrollY] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { asPath } = useRouter();

  console.log(asPath);

  useEffect(() => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }

    return () => {};
  }, [scrollY]);

  return (
    <div
      className={`w-full md:h-24 h-16 flex sticky top-0 z-10 p-4  ${
        scrollY ? 'bg-white dark:bg-zinc-800' : 'bg-transparent'
      }`}>
      <div className="w-full px-2 flex justify-between items-center">
        <div className="w-full md:w-1/3 flex items-center">
          <img
            src={'/logo.png'}
            alt="logo-navbar"
            className="md:w-16 md:h-16 w-10 h-10 object-cover"
          />
          <h1 className="text-md font-semibold ms-2 md:text-2xl flex w-fullfont-bold text-zinc-700 dark:text-white">
            Daffa Tabiano{' '}
            <span className="ps-2 text-zinc-400 dark:text-zinc-300">
              | FE Developer
            </span>{' '}
          </h1>
        </div>
        <div className="md:w-2/3 w-fit flex items-center justify-end ">
          <ul className="gap-4 hidden md:flex">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className={` ${
                  item.path === asPath
                    ? 'text-zinc-900 dark:text-zinc-100 font-bold'
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setMenu(!menu)}
            className="bg-transparent w-8 h-8 md:hidden text-xl">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
}
