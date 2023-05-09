import hero from '../../assets/hero.png';
import arrow from '../../assets/arrow.svg';

const Hero = ({ setOpenModal }) => {
  return (
    <section
      id="home"
      className="flex md:pt-24 md:flex-row flex-col justify-items-center lg:pl-8 md:pb-28"
    >
      <div className="flex-1 xl:ml-4 md:ml-8 md:mt-0 md:mr-0 md:mb-0 mx-8">
        <div>
          <h4 className="text-xs uppercase font-thin sm:py-5 py-2 md:py-2 xl:text-lg xl:py-3">
            cleveland&apos;s trusted transportation provider
          </h4>
        </div>
        <div className="xl:text-6xl lg:text-5xl text-4xl leading-tight">
          <h1>
            Revolutionize
            <img
              className="lg:h-4 h-3 inline pl-4"
              src={arrow}
              alt="arrow image"
            />{' '}
            <br />
            how you commute around the city
          </h1>
        </div>
        <div>
          <p className="md:text-lg xl:pt-5 md:pt-3 py-2 text-sm w-5/6 text-gray-600">
            Bringing safe, reliable, and affordable rides right to your
            doorstep. If you need a ride to an appointment, an event or to a
            local store then book your ride today with our safe and friendly
            team.
          </p>
        </div>
        <div className="md:mt-2 my-2">
          <a
            href="#_"
            className="md:mr-2 my-2 relative inline-flex items-center lg:px-12 md:px-5 px-28 md:py-3 py-2 overflow-hidden text-lg font-medium text-white border-2 bg-[#FF6602] border-[#FF6602] rounded-full hover:text-white group hover:bg-[#FF6602] hover:border-[#232323]"
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
            <button className="relative">Book A Ride</button>
          </a>
          <a
            href="#services"
            className="relative inline-flex items-center lg:px-12 md:px-5 px-28 md:py-3 py-2 overflow-hidden text-lg font-medium text-[#232323] border-2 border-[#232323] rounded-full hover:text-white group hover:bg-[#232323]"
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
      <div className="flex-1 flex items-center justify-center h-full mr-16 md:mr-12 mr-8 md:mt-10 mt-8 order-first md:order-last">
        <img
          src={hero}
          alt="van driver"
          className="md:w-12/12 h-full md:object-cover object-top"
        />
      </div>
    </section>
  );
};

export default Hero;
