import colorlogo from '../assets/lightlogo.svg';
import clock from '../assets/clock.svg';

const Footer = () => {
  return (
    <footer className="px-3 py-8 text-gray-500 transition-colors duration-200 bg-[#232323] text-2 dark:text-gray-200">
      <div className="flex flex-col">
        <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
            <a
              aria-current="page"
              href="#"
              className="hover:text-[#FF6602] text-[#FFF5E1]"
            >
              Services
            </a>
            <a
              aria-current="page"
              href="#"
              className="hover:text-[#FF6602] text-[#FFF5E1]"
            >
              About
            </a>
            <a
              aria-current="page"
              href="#"
              className="hover:text-[#FF6602] text-[#FFF5E1]"
            >
              FAQs
            </a>
          </nav>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
          <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
            {/* use relative & absolute in the divs below to position the clock and hours side by side */}
            <div className="relative grid grid-cols-1 w-xs">
              <div className="absolute">
                <img className="mr-0" src={clock} alt="clock image" />
              </div>
              <div className="flex-col">
                <h6 className="text-sm pl-16 text-[#FFF5E1]">
                  Hours of Operation
                </h6>
                <h6 className="text-[#FFF5E1] pl-16">7:00 AM - 7:00 PM EST</h6>
              </div>
            </div>
          </div>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
          <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span className="text-[#FFF5E1]">© 2023 All Rights Reserved</span>
            <span className="mt-7 md:mt-1">
              <img src={colorlogo} alt="color logo" className="w-36" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
