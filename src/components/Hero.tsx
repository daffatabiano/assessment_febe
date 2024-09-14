const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[url('/light-bg.jpeg')] bg-cover bg-center dark:bg-[url('/dark-bg.jpeg')] bg-no-repeat">
      <div className="flex-col lg:flex-row-reverse">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Next.JS Assessment FEBE</h1>
          <p className="text-2xl py-6 ">PT. Arnawa Teknologi Informasi</p>
          <button className="bg-primary dark:bg-secondary text-white p-4 rounded w-14">
            Read More
          </button>
        </div>
        <div className="max-w-md">
          <img
            src="/arnawa.png"
            alt="company-logo"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export { Hero };
