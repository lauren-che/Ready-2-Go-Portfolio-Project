import Header from '../../assets/servicesheader.svg';
import rides from '../../assets/rides.svg';
import safe from '../../assets/safe.svg';
import car from '../../assets/car.svg';
import pricing from '../../assets/pricing.svg';

const ServiceHeader = () => {
  return (
    <div>
      <div className="mx-auto w-full text-center place-items-center relative">
        <img src={Header} alt="services header image" />
        <h2 className="lg:text-2xl font-semibold leading-7 uppercase tracking-widest absolute z-999 text-[#FFF5E1] xl:top-96 lg:top-80 md:top-40 top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
          our services
        </h2>
        <h5 className="w-5/6 font-semibold text-[#FFF5E1] lg:text-6xl text-xl items-center absolute z-999 lg:top-64 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-tight">
          Comfortable Rides for Medical Appointments and Beyond
        </h5>
      </div>
      <div className="flex flex-nowrap justify-evenly text-center lg:inset-x-1/4 absolute z-999 lg:bottom-4/5 top-80 leading-tight text-[#FFF5E1]">
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <img
            className="lg:w-48 w-14 "
            src={rides}
            alt="on-demand rides image"
          />
          <p className="xl:text-xl lg:text-lg text-xs xl:w-56 lg:w-48 md:w-32 w-24 py-2">
            On-Demand Rides Across Cleveland
          </p>
        </div>
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <img
            className="lg:w-48 w-14"
            src={safe}
            alt="safe rides image"
          />
          <p className="xl:text-xl lg:text-lg text-xs xl:w-42 lg:w-48 md:w-32 w-20 py-2">
            Safe & Reliable Drivers
          </p>
        </div>
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <img 
          className="lg:w-48 w-14"
          src={car} 
          alt="car image" />
          <p className="xl:text-xl lg:text-lg text-xs w-24 py-2">
            Wheelchair Accessibile Rides
          </p>
        </div>
        <div className="w-1/2 grid place-items-center md:basis-1/4">
          <img
            className="lg:w-48 w-14"
            src={pricing}
            alt="pricing image"
          />
          <p className="xl:text-xl lg:text-lg text-xs w-24 py-2">
            We Accept Insurance Payments
          </p>
        </div>
      </div>
      <div className="absolute lg:-bottom-5/6 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <a
          href="#_"
          className="relative inline-flex items-center md:px-24 md:py-2 py-2 overflow-hidden text-lg font-medium text-white border-2 bg-[#FF6602] border-[#FF6602] rounded-full hover:text-white group hover:bg-[#FF6602] hover:border-[#FFF5E1] hover:border-2"
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
          <span className="relative">Book A Ride</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceHeader;
