import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { logo } from '../assets';
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
      className={`w-full h-24 flex fixed z-10 p-4 ${
        scrollY ? 'bg-white dark:bg-zinc-800' : 'bg-transparent'
      }`}>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/3 flex items-center">
          <img
            src={logo}
            alt="logo-navbar"
            className="w-20 h-20 object-cover"
          />
          <h1 className="text-xl md:text-3xl font-bold text-zinc-700 dark:text-white">
            Daffa Tabiano |{' '}
            <span className="text-zinc-500 dark:text-zinc-300">
              FE Developer
            </span>{' '}
          </h1>
        </div>
        <div className="w-2/3 flex items-center justify-end ">
          <ul className="flex gap-4">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className={` ${
                  item.path === asPath
                    ? 'text-zinc-900 dark:text-zinc-100'
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
