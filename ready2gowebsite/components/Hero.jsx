'use client';

import Link from 'next/link';
import Image from 'next/image';
import Modal from '@components/Modal';
import { useState } from 'react';

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="home"
      className="flex md:pt-6 md:flex-row flex-col justify-items-center lg:pl-14 md:pb-40"
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
            <Image
              priority
              src="/assets/images/arrow.svg"
              alt="arrow image"
              width={80}
              height={150}
              className="lg:h-4 h-3 inline pl-4"
            />
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
            className="md:mr-2 my-2 relative inline-flex items-center lg:px-12 md:px-5 px-28 md:py-3 py-2 overflow-hidden text-lg font-medium text-white border-2 bg-primary-orange border-primary-orange rounded-full hover:text-white group hover:bg-primary-orange hover:border-primary-black"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-primary-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
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
            <button
              className="relative"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Book A Ride
            </button>
          </a>
          <a
            href="#services"
            className="relative inline-flex items-center lg:px-12 md:px-5 px-28 md:py-3 py-2 overflow-hidden text-lg font-medium text-primary-black border-2 border-primary-black rounded-full hover:text-white group hover:bg-primary-black z-0"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-primary-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease z-0"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease z-0">
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
            <Link href="/services" className="relative">
              Learn More
            </Link>
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-full mr-16 md:mr-12 mr-8 md:mt-10 mt-8 order-first md:order-last">
        <Image
          priority
          src="/assets/images/hero.png"
          alt="Driver Image"
          width={600}
          height={300}
          className="md:w-12/12 h-full md:object-cover object-top"
        />
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </section>
  );
};

export default Hero;
