const Hero = () => {
  return (
    <div className="hero h-screen transition duration-300 dark:shadow-[inset_0_-34px_65px_40px_rgba(10,10,10,1)] shadow-[inset_0_-34px_65px_40px_rgba(255,255,255,1)] bg-[url('/light-bg.jpeg')] bg-cover bg-center dark:bg-[url('/dark-bg.jpeg')] bg-no-repeat relative">
      <div className=" h-full flex-col-reverse flex md:justify-between justify-center md:gap-8 items-center md:flex-row px-8">
        <div className="max-w-md text-zinc-950 dark:text-white text-center md:text-left">
          <h1 className="md:text-5xl text-3xl font-bold">
            Next.JS Assessment FEBE
          </h1>
          <p className="text-2xl md:py-6 font-medium text-balance md:mb-6">
            PT. Arnawa Teknologi Informasi
          </p>
          <button
            type="button"
            onClick={() => window.open('https://dafportabs.vercel.app/')}
            className="bg-dark dark:bg-default text-white dark:text-dark md:p-2 py-1 mt-8 md:mt-4 rounded-lg font-bold text-md md:w-1/2 w-full">
            View Portfolio
          </button>
        </div>
        <div className="md:w-1/2  flex justify-center">
          <img
            src="/next-js.svg"
            alt="company-logo"
            className="w-72 h-72 object-contain dark:hidden"
          />
          <img
            src="/next-js-dark.png"
            alt="company-logo"
            className="md:w-96 md:h-96 w-72 h-72 mb-4 md:mb-0 object-contain dark:block hidden"
          />
        </div>
      </div>
      <p className="text-center md:block hidden md:text-end text-zinc-950 dark:text-white font-extralight text-sm italic md:bottom-5 md:absolute md:right-8">
        Designed by <span className="font-normal">Daffa Tabiano</span>
      </p>
      <p className="hidden md:block md:text-start text-zinc-950 dark:text-white font-extralight text-sm italic mt-4 md:bottom-5 md:absolute md:left-8">
        Rest API by <span className="font-normal">jsonplaceholder</span>
      </p>
    </div>
  );
};

export { Hero };
