import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import lightlogo from '../assets/lightlogo.svg';
import menu from '../assets/menu.png';
// run npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome  in order to import FontAwesomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: 'Services', link: '#services' },
    { name: 'Testimonials', link: '#testimonials' },
    { name: 'About', link: '#about' },
    { name: 'FAQs', link: '#faqs' },
  ];
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? 'md:bg-[#232323]/100 text-gray-900' : 'text-white'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-8 my-2">
          <img className="md:h-24 h-14" src={logo} alt="Ready 2 Go Logo" />
        </div>
        <div
          className={` ${
            sticky ? 'md:bg-[#232323]/0 bg-[#232323]' : 'bg-[#232323]'
          } text-gray-900 lg:block hidden px-7 py-7 font-medium rounded-bl-full`}
          // className='bg-[#232323] lg:block hidden px-7 py-7 font-medium rounded-bl-full'
        >
          <ul className="flex items-center gap-1 py-2 text-sm">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 text-white hover:text-[#FF6602]">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <a
              href="#_"
              className="rounded-full px-7 py-2 lg:px-4 lg:py-3 lg:mx-5 mx-9 overflow-hidden relative group cursor-pointer bg-[#FFF5E1] font-medium text-[#232323] text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF6602] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-[#232323] transition duration-300 group-hover:text-white ease">
                Book A Ride
              </span>
            </a>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] bg-[#232323] py-6 px-6 rounded-bl-full ${
            open ? (
              <FontAwesomeIcon
                icon="fa-regular fa-xmark"
                style={{ color: '#ffffff' }}
              />
            ) : (
              { menu }
            )
          } lg:hidden md:py-10`}
        >
          <img className="h-6 ml-3 mb-3" src={menu} alt="mobile menu icon" />
        </div>
      </div>
      <div
        className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-[#232323] top-0 duration-300 ${
          open ? 'right-0' : 'right-[-100%]'
        }`}
      >
        <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
          {menuLinks?.map((menu, i) => (
            <li key={i} className="px-6 text-white hover:text-[#FF6602]">
              <a href={menu?.link}>{menu?.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
