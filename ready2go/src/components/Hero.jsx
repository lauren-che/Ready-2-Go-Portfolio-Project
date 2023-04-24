import hero from '../assets/hero.png';
import arrow from '../assets/arrow.svg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 ml-16">
        <div className="uppercase font-thin py-5">
          <h4>cleveland&apos;s trusted transportation provider</h4>
        </div>
        <div className="text-6xl leading-tight">
          <h1>
            Revolutionize
            <img className="h-4 inline pl-5" src={arrow} alt="arrow image" />
            your transportation around the city
          </h1>
        </div>
        <div>
          <p className="py-6 font-bold">
            Bringing safe, reliable, and affordable rides right to your
            doorstep.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="#_"
            className="mr-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 bg-[#FF6602] border-[#FF6602] rounded-full hover:text-white group hover:bg-[#FF6602] hover:border-[#232323]"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#232323] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Book A Ride</span>
          </a>
          <a
            href="#services"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#232323] border-2 border-[#232323] rounded-full hover:text-white group hover:bg-[#232323]"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#232323] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Learn More</span>
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-full mr-16">
        <img
          src={hero}
          alt="van driver"
          className="md:w-12/12 h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
