'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Modal from '@components/Modal';
// import Modal from '@components/Form';

const Nav = () => {
  const [state, setState] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="bg-primary-black drop-shadow-lg border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex">
        <div className="flex items-center justify-between py-2 md:py-2 md:block">
          <Link href="/">
            <Image
              priority
              src="/assets/images/lightlogo.svg"
              alt="Ready 2 Go Logo"
              width={170}
              height={170}
              className="object-contain h-[4rem] w-auto lg:pl-10 xl:pl-2"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-primary-white hover:text-primary-white"
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
          className={`scroll-smooth flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="text-primary-white justify-end items-center space-y-6 md:flex md:space-x-8 md:space-y-0">
            <li className="hover:text-primary-orange cursor-pointer">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-primary-orange cursor-pointer">
              <Link href="#testimonials" className="block" scroll={false}>
                Testimonials
              </Link>
            </li>

            <li className="hover:text-primary-orange cursor-pointer">
              <Link href="#about" scroll={false}>
                About
              </Link>
            </li>

            <li className="hover:text-primary-orange cursor-pointer">
              <Link href="/services/#faq">FAQ</Link>
            </li>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="block py-3 px-6 font-medium text-center text-primary-black bg-primary-white hover:bg-primary-orange hover:text-primary-white active:shadow-none rounded-full shadow transition duration-300 md:inline ease"
                >
                  Book A Ride
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </nav>
  );
};

export default Nav;
