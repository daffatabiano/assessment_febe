import React, { useCallback } from 'react';
import { FaArrowAltCircleRight, FaRegMoon, FaRegSun } from 'react-icons/fa';

export default function Drawer({
  children,
  isOpen,
  setIsOpen,
  darkMode,
  toggleDarkMode,
}: DrawerTypeProps): JSX.Element {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <main
      className={
        ' fixed overflow-hidden md:hidden z-[999] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
      aria-modal="true"
      aria-labelledby="drawer-label"
      role="dialog">
      <section
        className={
          ' w-screen max-w-lg right-0 px-4 absolute bg-white dark:bg-zinc-800 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }>
        <article className="relative w-screen max-w-lg pb-1 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg flex justify-between text-zinc-800 dark:text-zinc-50">
            <img
              src="/logo.png"
              alt="logo-png"
              className="w-10 h-10 object-contain"
            />{' '}
            <div className="flex gap-4 itemx-center justify-center">
              <label className="md:hidden inline-flex items-center cursor-pointer ps-4">
                <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <FaRegSun />
                </span>
                <input
                  type="checkbox"
                  onClick={toggleDarkMode}
                  value=""
                  checked={darkMode}
                  className="sr-only peer"
                  aria-label="Toggle dark mode"
                />
                <div className="relative w-11 h-6 bg-zinc-100 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-100 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-zinc-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <FaRegMoon />
                </span>
              </label>
              <span
                aria-label="Close drawer"
                className="flex items-center opacity-50 cursor-pointer hover:opacity-100"
                onClick={handleClose}>
                <FaArrowAltCircleRight className="text-xl" />
              </span>
            </div>
          </header>
          {children}
          <footer className="p-2 flex justify-between text-sm italic font-extralight text-zinc-800 dark:text-zinc-50">
            <p>Rest API by jsonplaceholder</p>
            <p>Designed by Daffa Tabiano</p>
          </footer>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        aria-label="Close drawer"
        onClick={handleClose}></section>
    </main>
  );
}
