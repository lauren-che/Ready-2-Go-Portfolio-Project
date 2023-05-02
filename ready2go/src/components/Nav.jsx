import { useState } from 'react';
import logo from '../assets/lightlogo.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="bg-[#232323] drop-shadow-lg border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <img src={logo} className="h-16 pl-6" alt="Ready 2 Go Logo" />
          </a>
          <div className="md:hidden">
            <button
              className="text-[#FFF5E1] hover:text-[#FFF5E1]"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="text-[#FFF5E1] justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li className="hover:text-[#FF6602] cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-[#FF6602] cursor-pointer">
              <HashLink smooth to="/#testimonials" className="block">
                Testimonial
              </HashLink>
            </li>

            <li className="hover:text-[#FF6602] cursor-pointer">
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>

            <li className="hover:text-[#FF6602] cursor-pointer">
              <HashLink to="/#faq">FAQ</HashLink>
            </li>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <a
                  href="#"
                  className="block py-3 px-6 font-medium text-center text-[#232323] bg-[#FFF5E1] hover:bg-[#FF6602] active:shadow-none rounded-full shadow transition duration-300 md:inline hover:text-white ease"
                >
                  Book A Ride
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
