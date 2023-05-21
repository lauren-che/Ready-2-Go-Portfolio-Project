import Image from 'next/image';

const ServiceHeader = () => {
  return (
    <div>
      <div className="mx-auto w-full text-center place-items-center relative flex-grow">
        <Image
          src="/assets/images/servicesheader.svg"
          alt="services header image"
          width={1000}
          height={1000}
          className="w-[100vw] "
        />
        <h2 className="lg:text-2xl font-semibold leading-7 uppercase tracking-widest absolute z-999 text-primary-white xl:top-96 lg:top-80 md:top-56 top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
          our services
        </h2>
        <h5 className="w-5/6 font-semibold text-primary-white xl:text-6xl lg:text-5xl md:text-4xl text-xl items-center absolute z-999 xl:top-64 lg:top-80 md:top-32 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-tight">
          Comfortable Rides for Medical Appointments and Beyond
        </h5>
      </div>
      <div className="flex flex-row flex-grow items-center justify-center flex-nowrap text-center inset-x-1/4 absolute z-999 xl:top-[48rem] lg:top-[37rem] md:top-[29rem] top-[18rem] leading-tight text-primary-white xl:gap-8 md:gap-6">
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <Image
            src="/assets/images/rides.svg"
            alt="on-demand rides image"
            width={50}
            height={50}
            className="lg:w-48 md:w-28 w-14 "
          />
          <p className="xl:text-xl lg:text-lg text-xs xl:w-56 lg:w-48 md:w-32 w-24 py-2">
            On-Demand Rides Across Cleveland
          </p>
        </div>
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <Image
            src="/assets/images/safe.svg"
            alt="safe rides image"
            width={50}
            height={50}
            className="lg:w-48 md:w-28 w-14 "
          />
          <p className="xl:text-xl lg:text-lg text-xs xl:w-42 lg:w-48 md:w-32 w-20 py-2">
            Safe & Reliable Drivers
          </p>
        </div>
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <Image
            src="/assets/images/car.svg"
            alt="car image"
            width={50}
            height={50}
            className="lg:w-48 md:w-28 w-14 "
          />
          <p className="xl:text-xl lg:text-lg text-xs lg:w-48 md:w-32 w-24 py-2">
            Wheelchair Accessibile Rides
          </p>
        </div>
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <Image
            src="/assets/images/pricing.svg"
            alt="pricing image"
            width={50}
            height={50}
            className="lg:w-48 md:w-28 w-14 "
          />
          <p className="xl:text-xl lg:text-lg text-xs xl:w-52 lg:w-48 md:w-32 w-24 py-2">
            We Accept Insurance Payments
          </p>
        </div>
      </div>
      <div className="hidden md:block absolute xl:top-[70rem] lg:top-[56rem] md:top-[42rem] md:mb-2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <a
          href="#_"
          className="relative inline-flex items-center md:px-24 xl:py-3 md:py-2 py-2 overflow-hidden text-lg font-medium text-white border-2 bg-primary-orange border-primary-orange rounded-full hover:text-white group hover:bg-primary-orange hover:border-primary-white hover:border-2"
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
          <span className="relative">Book A Ride</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceHeader;
