const Hero = () => {
  return (
    <div className="hero h-screen dark:shadow-[inset_0_-34px_65px_40px_rgba(10,10,10,1)] shadow-[inset_0_-34px_65px_40px_rgba(255,255,255,1)] bg-[url('/light-bg.jpeg')] bg-cover bg-center dark:bg-[url('/dark-bg.jpeg')] bg-no-repeat">
      <div className="flex-col-reverse flex md:justify-between justify-center gap-8 items-center md:flex-row px-8 pt-20">
        <div className="max-w-md text-zinc-950 dark:text-white text-center md:text-left">
          <h1 className="text-5xl font-bold">Next.JS Assessment FEBE</h1>
          <p className="text-2xl py-6 font-medium text-balance">
            PT. Arnawa Teknologi Informasi
          </p>
          <button className="bg-primary dark:bg-secondary text-white p-4 rounded w-14">
            Read More
          </button>
        </div>
        <div className=" w-1/2 flex justify-center">
          <img src="/arnawa.png" alt="company-logo" className="w-48 h-48" />
        </div>
      </div>
    </div>
  );
};

export { Hero };
