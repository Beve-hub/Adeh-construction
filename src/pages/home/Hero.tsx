

const Hero = () => {
  return (
    <section className="mt-60 py-16 px-4 sm:px-6 lg:px-15">
      <div className="max-w-[60rem] mx-auto text-center lg:text-left">
        <h1 className="text-white font-bold sm:text-4xl lg:text-4xl">
          Building Excellence, One Project at a Time.
        </h1>
        <p className="mt-6 text-white text-base sm:text-lg ">
          Building living & working spaces for future generations. We focus on blending our international expertise with local architecture to provide sustainable & cost-effective solutions.
        </p>
        
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
          <a
            href="/about/background"
            className="inline-block bg-[--bg-color] text-white px-6 py-3 text-sm font-medium rounded-md shadow hover:bg-[--layer-color] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Learn More
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
