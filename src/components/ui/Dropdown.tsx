const styles = {
  button:
    'block px-4 w-full text-start rounded-lg py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white',
};

export default function Dropdown({ open }: { open: boolean }) {
  return (
    <div
      className={`z-10 ${
        open ? 'block' : 'hidden'
      } absolute right-0 top-full mt-4 bg-white divide-y divide-zinc-100 rounded-lg shadow w-44 dark:bg-zinc-700`}>
      <ul
        className="p-2 text-sm text-zinc-700 dark:text-zinc-200"
        aria-labelledby="dropdownDefaultButton">
        <li>
          <button className={styles.button}>Short Title</button>
        </li>
        <li>
          <button type="button" className={styles.button}>
            Long Title
          </button>
        </li>
        <hr className="h-px my-3 bg-zinc-200 border-1 mx-4 dark:bg-zinc-700" />
        <li>
          <button className={styles.button}>Default</button>
        </li>
      </ul>
    </div>
  );
}
