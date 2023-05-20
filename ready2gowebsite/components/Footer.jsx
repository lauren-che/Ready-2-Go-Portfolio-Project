import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-3 py-8 text-gray-500 transition-colors duration-200 bg-primary-black text-2 dark:text-gray-200">
      <div className="flex flex-col">
        <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
            <Link
              aria-current="page"
              href="/services"
              className="hover:text-primary-orange text-primary-white"
            >
              Services
            </Link>
            <Link
              aria-current="page"
              href="#about"
              className="hover:text-primary-orange text-primary-white"
            >
              About
            </Link>
            <a
              aria-current="page"
              href="#"
              className="hover:text-primary-orange text-primary-white"
            >
              FAQs
            </a>
          </nav>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
          <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
            {/* use relative & absolute in the divs below to position the clock and hours side by side */}
            <div className="relative grid grid-cols-1 w-xs">
              <div className="absolute">
                <Image
                  priority
                  src="/assets/images/clock.svg"
                  alt="clock"
                  width={50}
                  height={50}
                  className="mr-0"
                />
              </div>
              <div className="flex-col">
                <h6 className="text-sm pl-16 text-primary-white">
                  Hours of Operation
                </h6>
                <h6 className="text-primary-white pl-16">
                  7:00 AM - 7:00 PM EST
                </h6>
              </div>
            </div>
          </div>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
          <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span className="text-primary-white">
              © 2023 All Rights Reserved
            </span>
            <Link href='/' className="mt-7 md:mt-1">
              <Image
                src="/assets/images/lightlogo.svg"
                alt="Ready 2 Go Logo"
                width={100}
                height={100}
                className="w-40"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
