'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid';
import Modal from '@components/Modal';

const ServiceBenefits = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* Our Benefits Section */}
      <div className="mx-auto max-w-5xl md:my-40 my-24 text-center">
        <h2 className="text-2xl font-semibold leading-7 uppercase tracking-widest pb-6">
          ride benefits
        </h2>
        <p className="px-8 mt-2 md:text-4xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We offer a range of services to meet the transportation needs of
          residents in Cleveland, Ohio.
        </p>
      </div>

      {/* Appointments Section */}
      <div className="appointments-container">
        <div className="appointments-sub-container">
          <div className="appointments-box">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg pl-6">
                <p className="text-base font-semibold leading-7 text-primary-white">
                  Appointments
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
                  Medical Transportation
                </h1>
                <p className="mt-6 text-xl leading-8 text-primary-white">
                  Our medical transportation service provides safe and reliable
                  transportation to and from medical appointments for nursing
                  home residents in Cleveland, Ohio
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              src="/assets/images/driver1.svg"
              alt="van driver image"
              width={50}
              height={50}
              className="w-[48rem] max-w-full sm:w-[32rem] mt-8 pl-6"
            />
          </div>
          <div className="appointments-box2">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-primary-white lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-primary-orange"
                      aria-hidden="true"
                    />
                    <span className="text-primary-white">
                      Transportation to and from medical appointments, including
                      visits to hospitals, clinics, and specialty centers
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-primary-orange"
                      aria-hidden="true"
                    />
                    <span className="text-primary-white">
                      Assistance with mobility and personal care, such as
                      helping clients in and out of the vehicle and providing
                      support during the ride
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-primary-orange"
                      aria-hidden="true"
                    />
                    <span className="text-primary-white">
                      Coordination with healthcare providers to ensure timely
                      arrival and departure from appointments
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Transportation Section */}
      <div className="social-trans-container">
        <div className="container xl:px-12 py-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:pl-12">
              <p className="text-base font-semibold leading-7 text-primary-white">
                Social Events
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl">
                Social Transportation
              </h1>
              <p className="mt-2 text-primary-white lg:w-3/4 md:w-full ">
                Our social transportation service offers seniors the opportunity
                to get out and about in Cleveland, Ohio.
              </p>
            </div>
            <div>
              <p className="md:mt-12 mt-10 md:ml-4 text-primary-white lg:mr-20">
                We offer transportation to social events, such as visits to
                friends and family, outings to local attractions, and more. Our
                friendly driver can pick you up at your preferred time and
                location that best suits your preference.
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:mb-6 lg:grid-cols-3">
          <Image
            src="/assets/images/vanimage.png"
            alt="van image"
            width={50}
            height={50}
            className="lg:w-10/12 h-52 md:h-96 w-full object-cover rounded-[1.5rem] col-span-2 lg:ml-12"
          />
          <Image
            src="/assets/images/driver2.png"
            alt="driver image"
            width={50}
            height={50}
            className="hidden w-10/12 h-52 object-cover rounded-[1rem] lg:block lg:h-96"
          />
        </div>
        <div className="grid sm:mb-6 lg:grid-cols-4 lg:ml-11 mt-10 lg:w-11/12 w-full">
          <div className="bg-primary-white rounded-[1.5rem] md:h-48 h-72 col-span-3 overflow-hidden">
            <div className="grid md:grid-cols-3 grid-row">
              <h1 className="md:text-[6rem] text-[1.5rem] font-bold mt-6 ml-8 justify-center">
                24/7
              </h1>
              <p className="col-span-2 md:mt-12 px-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                odit laborum corrupti ea magnam optio consequuntur, ad, voluptas
                adipisci aliquid quia repellendus possimus iusto voluptatum
                rerum, libero quod molestiae modi?
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/carservice.svg"
            alt="driver image"
            width={50}
            height={50}
            className="hidden w-auto h-48 object-cover rounded-[1rem] lg:block ml-10"
          />
        </div>
      </div>

      {/* Vehicle Options Section */}
      <div className="rounded-t-3xl bg-primary-black relative isolate overflow-hidden -mt-16 px-6 md:pt-24 pt-8 pb-32 lg:overflow-visible lg:px-10">
        <div className="grid md:grid-cols-3 grid-cols-1 py-12 px-6">
          <div className="col-span-2">
            <h1 className="xl:ml-10 my-2 text-3xl font-bold tracking-tight text-primary-white sm:text-4xl lg:leading-2">
              We also offer a range of vehicle options to suit your specific
              needs.
            </h1>
            <p className="py-4 xl:ml-10 lg:mr-20 text-primary-white leading-8">
              At Ready 2 Go Transportation, we are committed to providing
              inclusive transportation solutions for all members of our
              community. We understand that mobility can be a challenge for
              individuals with disabilities or those who use wheelchairs, and
              that&apos;s why we offer wheelchair accessible vehicle options to
              suit your specific needs.
            </p>
          </div>
          <div className="lg:ml-20 md:ml-6">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="relative inline-flex left-0 block md:flex-col xl:px-12 lg:px-8 md:px-5 px-20 lg:py-16 md:py-20 py-2 mt-4 text-center overflow-hidden text-lg font-medium text-primary-white border-2 border-primary-orange rounded-lg group hover:bg-primary-orange hover:translate-y-3 transition duration-150 ease-out hover:ease-in flex-row-reverse md:items-center"
            >
              <Image
                src="/assets/images/outwardarrow.svg"
                alt="outwardarrow arrow"
                width={50}
                height={50}
                className="md:w-1/2 w-[2rem] mx-1 flex-row-reverse"
              />
              <span className="relative md:text-2xl text-xl w-full">
                Book A Ride
              </span>
            </button>
          </div>

          {/* second row or 3 tier information */}
        </div>
        <div className="container px-6 md:py-12 py-6 mx-auto lg:mt-6 text-primary-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Image
                src="/assets/images/orangeclock.svg"
                alt="orange clock"
                width={50}
                height={50}
                className="w-[4rem]"
              />

              <h1 className="mt-4 text-2xl font-semibold">
                Wheelchair Accessible Rides
              </h1>

              <p className="mt-2 text-sm leading-6">
                Our wheelchair accessible vehicles are equipped with features
                such as ramps, lifts, and secure tie-downs to ensure a safe and
                comfortable ride. Our professional and experienced drivers are
                trained to assist passengers with disabilities and will ensure
                that you reach your destination safely and on time.
              </p>
            </div>

            <div>
              <Image
                src="/assets/images/orangecard.svg"
                alt="orange credit card"
                width={50}
                height={50}
                className="w-[4rem]"
              />

              <h1 className="mt-4 text-2xl font-semibold">
                Experienced Drivers
              </h1>

              <p className="mt-2 text-sm leading-6">
                Our professional drivers are not only experienced in providing
                top-notch transportation services but also receive specialized
                training in accessibility. We understand that passengers with
                disabilities require extra assistance, and our drivers are
                trained to provide a comfortable and safe ride for all
                passengers.
              </p>
            </div>

            <div>
              <Image
                src="/assets/images/pricetag.svg"
                alt="price tag"
                width={50}
                height={50}
                className="w-[4rem]"
              />
              <h1 className="mt-4 text-2xl font-semibold">
                Customized Accessibility
              </h1>

              <p className="mt-2 text-sm leading-6">
                We understand that every passenger has unique accessibility
                needs. That&apos;s why we offer customized accessibility
                solutions to ensure that your transportation needs are met.
                Whether you need assistance with mobility aids or other
                accommodations, we will work with you to provide a customized
                solution that meets your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle & Ride Safety Section */}
      <div className="rounded-t-3xl bg-[#14968F] relative isolate overflow-hidden -mt-16 px-12 pt-16 pb-24 lg:overflow-visible lg:px-10">
        <div className="grid md:grid-cols-2 md:mt-20 mt-8">
          <div className="md:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg mt-8">
                <p className="text-base font-semibold leading-7 text-primary-white">
                  Ride Safety
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary-white">
                  Your Safety is Our Top Priority
                </h1>
                <p className="mt-6 xl:text-lg text-sm xl:leading-8 text-primary-white md:w-11/12">
                  We understand that safety is of the utmost importance when it
                  comes to transportation. That&apos;s why we have implemented
                  strict safety measures to ensure that our passengers are
                  always safe and secure during their rides. Our vehicles are
                  regularly inspected and maintained to ensure that they are in
                  top condition. Our drivers undergo rigorous training to ensure
                  that they are qualified to provide safe and reliable
                  transportation services.
                </p>
              </div>
              {/* <a
                href="#"
                className="relative inline-flex items-center mt-8 lg:px-12 md:px-16 px-28 md:py-3 py-2 overflow-hidden text-lg font-medium text-primary-white border-primary-orange border-2 rounded-full hover:text-primary-orange group hover:bg-primary-orange bg-primary-orange hover:border-primary-white"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
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
              </a> */}
            </div>
            <div className="mt-12">
              <Image
                src="/assets/images/safety.svg"
                alt="safety icons"
                width={50}
                height={50}
                className="w-full lg:w-2/3 md:w-3/5 xl:ml-8"
              />
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default ServiceBenefits;
