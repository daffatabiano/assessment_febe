import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navLinks } from '@/constants';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import Drawer from '../ui/Drawer';

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
  }, []);

  useEffect(() => {
    if (theme) {
      setDarkMode(theme === 'dark');
      document.body.classList.add(theme);
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    }
    document.body.classList.toggle('dark');
  };

  const isCurrentPathActive = useCallback(
    (item: { path: string | string[] } = { path: '' }) => {
      const pathString = Array.isArray(item.path)
        ? item.path.join('/')
        : item.path;
      return (
        `${!pathString.includes('/') ? '/' + pathString : pathString}` ===
        asPath
      );
    },
    [asPath]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Drawer
        setIsOpen={setMenu}
        isOpen={menu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}>
        <ul className="w-full h-full flex flex-col items-center p-4 gap-4">
          {navLinks.map((item) => {
            return (
              <li key={item.id} className="w-full flex flex-col ">
                <Link
                  className={`relative text-lg font-medium text-zinc-950 dark:text-white p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 ${
                    isCurrentPathActive(item)
                      ? 'text-zinc-500 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 '
                      : ''
                  }`}
                  href={`${item.path}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
      <div
        className={`w-full md:h-24 h-16 flex fixed top-0 z-10 p-4  ${
          scrollY ? 'bg-white dark:bg-zinc-950' : 'bg-transparent'
        }`}>
        <div className="w-full px-2 flex justify-between items-center">
          <div className="w-full md:w-1/2 flex items-center">
            <img
              src={theme === 'dark' ? '/dark-logo.png' : '/logo.png'}
              alt="logo-navbar"
              loading="lazy"
              className=" md:w-16 md:h-16 w-10 h-10 object-cover"
            />
            <h1 className="text-sm  font-semibold ms-2 md:text-2xl flex w-fullfont-bold text-zinc-700 dark:text-white">
              Daffa Tabiano{' '}
              <span className="ps-2 text-zinc-400 dark:text-zinc-300">
                | FE Developer
              </span>{' '}
            </h1>
          </div>
          <div className="md:w-1/2 w-fit flex items-center justify-end ">
            <ul className="gap-4 hidden md:flex">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={` text-balance hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-1 ${
                    isCurrentPathActive(item)
                      ? 'text-zinc-900 dark:text-zinc-100 font-bold -translate-y-1'
                      : 'text-zinc-700 dark:text-zinc-300 font-light'
                  }`}>
                  <Link href={asPath === '/contact' ? '/' : item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setMenu(!menu)}
              className="bg-transparent w-8 h-8 md:hidden text-xl dark:text-white">
              <GiHamburgerMenu />
            </button>

            <label className="md:inline-flex hidden items-center cursor-pointer ps-4">
              <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                <FaRegSun />
              </span>
              <input
                type="checkbox"
                onClick={toggleDarkMode}
                value=""
                checked={darkMode}
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
    </>
  );
}
