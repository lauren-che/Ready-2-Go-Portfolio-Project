'use client';

import { Fragment, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Image from 'next/image';
import cleveland from '../public/assets/images/cleveland.png';

function Icon({ id, open }) {
  return (
    // <img src={plus} alt="plus open image" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#FA7343"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      id="faq"
      className="w-full px-4 pt-16 pb-32 md:bg-cover bg-center text-primary-white"
      style={{ backgroundImage: 'url("/assets/images/cleveland.png")'}}
    >
      <div className="fixed w-[100vw] h-[100vh]">
        <Image
          src="/assets/images/cleveland.png"
          alt="cleveland skyline image"
          width={1000}
          height={1000}
        />
      </div>

      <h4 className="text-center text-lg py-4 tracking-[0.5rem]">FAQ</h4>
      <h1 className="text-center text-4xl">Frequently Asked Questions</h1>
      <Fragment>
        <main className="items-center">
          <Accordion
            className="lg:w-1/2 md:w-3/4 w-10/12 pt-12"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`${
                open === 1 ? 'text-[#FA7343]' : 'text-primary-white'
              } text-md md:text-xl`} //this will change the header text color when the question is clicked
            >
              What are the ride fees?
            </AccordionHeader>
            <AccordionBody>
              This will depend on the type of service, distance traveled, and
              any additional services requested. It is best to contact us for a
              quote.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="lg:w-1/2 md:w-3/4 w-10/12 "
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`${
                open === 2 ? 'text-[#FA7343]' : 'text-[#FFF5E1]'
              } text-md md:text-xl`}
            >
              How do I book a trip?
            </AccordionHeader>
            <AccordionBody>
              You can book a trip by contacting us directly or filling out the
              reservation form on our website. You will need to provide details
              such as the pick-up and drop-off locations, dates and times, and
              the type of service needed.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="lg:w-1/2 md:w-3/4 w-10/12 "
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`${
                open === 3 ? 'text-[#FA7343]' : 'text-[#FFF5E1]'
              } text-md md:text-xl`}
            >
              Are the rides wheelchair accessible?
            </AccordionHeader>
            <AccordionBody>
              The company may offer wheelchair-accessible vehicles, but it is
              best to confirm this when booking a trip.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="lg:w-1/2 md:w-3/4 w-10/12 "
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`${
                open === 4 ? 'text-[#FA7343]' : 'text-[#FFF5E1]'
              } text-md md:text-xl`}
            >
              What Cleveland areas are covered?
            </AccordionHeader>
            <AccordionBody>
              Our service area include include Cleveland and surrounding areas.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="lg:w-1/2 md:w-3/4 w-10/12 "
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`${
                open === 5 ? 'text-[#FA7343]' : 'text-[#FFF5E1]'
              } text-md md:text-xl`}
            >
              Are the drivers insured and trained?
            </AccordionHeader>
            <AccordionBody>
              All drivers are properly trained and licensed, and all vehicles
              are insured for the protection of the passengers.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="lg:w-1/2 md:w-3/4 w-10/12"
            open={open === 6}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`${
                open === 6 ? 'text-[#FA7343]' : 'text-[#FFF5E1]'
              } text-md md:text-xl`}
            >
              Can I request a specific vehicle?
            </AccordionHeader>
            <AccordionBody>
              We are able to accommodate specific requests depending on
              availability. It is best to discuss options with us when booking a
              trip.
            </AccordionBody>
          </Accordion>
        </main>
      </Fragment>
    </div>
  );
};

export default FAQ;
