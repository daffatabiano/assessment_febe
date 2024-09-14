const Hero = () => {
  return (
    <div className="hero h-screen transition duration-300 dark:shadow-[inset_0_-34px_65px_40px_rgba(10,10,10,1)] shadow-[inset_0_-34px_65px_40px_rgba(255,255,255,1)] bg-[url('/light-bg.jpeg')] bg-cover bg-center dark:bg-[url('/dark-bg.jpeg')] bg-no-repeat">
      <div className=" h-full flex-col-reverse flex md:justify-between justify-center gap-8 items-center md:flex-row px-8">
        <div className="max-w-md text-zinc-950 dark:text-white text-center md:text-left">
          <h1 className="text-5xl font-bold">Next.JS Assessment FEBE</h1>
          <p className="text-2xl py-6 font-medium text-balance">
            PT. Arnawa Teknologi Informasi
          </p>
          <button className="bg-dark dark:bg-default text-white dark:text-dark md:p-4 p-2 mt-4 rounded-lg font-bold text-xl md:w-40 w-full">
            Read More
          </button>
        </div>
        <div className=" w-1/2 flex justify-center">
          <img
            src="/next-js.svg"
            alt="company-logo"
            className="w-72 h-72  dark:hidden"
          />
          <img
            src="/next-js-dark.png"
            alt="company-logo"
            className="w-96 h-96  dark:block hidden"
          />
        </div>
      </div>
      <p className="text-center md:text-end text-zinc-950 dark:text-white font-extralight text-sm italic mt-4 md:bottom-5 md:absolute md:right-5">
        Designed by <span className="font-normal">Daffa Tabiano</span>
      </p>
      <p className="hidden md:block md:text-start text-zinc-950 dark:text-white font-extralight text-sm italic mt-4 md:bottom-5 md:absolute md:left-5">
        Rest API by <span className="font-normal">jsonplaceholder</span>
      </p>
    </div>
  );
};

export { Hero };
