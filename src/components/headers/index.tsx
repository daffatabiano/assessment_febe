import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navLinks } from '@/constants';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

export default function Navbar() {
  const [scrollY, setScrollY] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { asPath } = useRouter();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.localStorage.getItem('theme') || 'light');
    }
    if (theme) {
      setDarkMode(theme === 'dark');
      document.body.classList.toggle('dark', theme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    }
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }

    return () => {};
  }, [scrollY]);

  console.log(theme);

  return (
    <div
      className={`w-full md:h-24 h-16 flex sticky top-0 z-10 p-4  ${
        scrollY ? 'bg-white dark:bg-zinc-800' : 'bg-transparent'
      }`}>
      <div className="w-full px-2 flex justify-between items-center">
        <div className="w-full md:w-1/3 flex items-center">
          <img
            src={`${theme ? '/dark-logo.png' : '/logo.png'}`}
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
                className={` text-balance ${
                  item.path === asPath
                    ? 'text-zinc-900 dark:text-zinc-100 font-bold'
                    : 'text-zinc-700 dark:text-zinc-300 font-light'
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

          <label className="inline-flex items-center cursor-pointer ps-4">
            <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              <FaRegSun />
            </span>
            <input
              type="checkbox"
              onClick={toggleDarkMode}
              value=""
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-zinc-100 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-100 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-zinc-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              <FaRegMoon />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
