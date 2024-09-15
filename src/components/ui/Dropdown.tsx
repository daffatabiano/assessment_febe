import { useCallback } from 'react';

const styles = {
  button:
    'block px-4 w-full text-start rounded-lg py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white',
};

export default function Dropdown({
  open,
  filter,
}: {
  open: boolean;
  filter: (filter: string) => void;
}) {
  const shortFilter = useCallback(() => {
    filter('short');
  }, [filter]);

  const longFilter = useCallback(() => {
    filter('long');
  }, [filter]);

  return (
    <div
      role="menu"
      aria-hidden={!open}
      aria-labelledby="dropdownDefaultButton"
      className={`z-10 ${
        open ? 'block' : 'hidden'
      } absolute right-0 top-full mt-4 bg-white divide-y divide-zinc-100 rounded-lg shadow w-44 dark:bg-zinc-700`}>
      <ul
        className="p-2 text-sm text-zinc-700 dark:text-zinc-200"
        aria-labelledby="dropdownDefaultButton">
        <li>
          <button
            type="button"
            onClick={shortFilter}
            className={styles.button}
            role="menuitem">
            Short Title
          </button>
        </li>
        <li>
          <button
            aria-label="menuitem"
            type="button"
            onClick={longFilter}
            className={styles.button}>
            Long Title
          </button>
        </li>
        <hr className="h-px my-3 bg-zinc-200 border-1 mx-4 dark:bg-zinc-700" />
        <li>
          <button
            role="menuitem"
            type="button"
            onClick={() => filter('')}
            className={styles.button}>
            Default
          </button>
        </li>
      </ul>
    </div>
  );
}
