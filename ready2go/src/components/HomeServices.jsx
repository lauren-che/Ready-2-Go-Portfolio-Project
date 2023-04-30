import homeService from '../assets/homeService.svg';
import smallFolder from '../assets/smallfolder.svg';
import rides from '../assets/rides.svg';
import safe from '../assets/safe.svg';
import car from '../assets/car.svg';
import pricing from '../assets/pricing.svg';

const HomeServices = () => {
  return (
    <div>
      <div className="relative text-center justify-center mx-12">
        <img src={homeService} alt="folder image" className="hidden md:flex" />
        <img src={smallFolder} alt="folder image" className="md:hidden pt-16" />
        <div>
          <h5 className="w-5/6 font-semibold text-[#FFF5E1] md:text-2xl xl:text-5xl lg:text-4xl text-xl items-center absolute z-999 lg:top-64 md:top-20 top-52 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-tight">
            Our transportation services are designed to cater to all your travel
            needs.
            <div className="flex flex-wrap justify-evenly xl:pt-24 pt-8">
              <div className="w-1/2 grid place-items-center md:basis-1/4">
                <img
                  className="xl:w-52 lg:w-36 md:w-42 w-20 md:py-0"
                  src={rides}
                  alt="on-demand rides image"
                />
                <p className="xl:text-2xl lg:text-lg text-xs xl:w-56 lg:w-48 md:w-32 w-42 py-2">
                  On-Demand Rides Across Cleveland
                </p>
              </div>
              <div className="w-1/2 grid place-items-center md:basis-1/4">
                <img
                  className="xl:w-52 lg:w-36 md:w-42 w-20 md:py-0"
                  src={safe}
                  alt="safe rides image"
                />
                <p className="xl:text-2xl lg:text-lg text-xs xl:w-56 lg:w-48 md:w-32 w-42 py-2">
                  Safe & Reliable Drivers
                </p>
              </div>
              <div className="w-1/2 grid place-items-center md:basis-1/4">
                <img
                  className="xl:w-52 lg:w-36 md:w-42 w-20 pt-8 md:py-0"
                  src={car}
                  alt="car image"
                />
                <p className="xl:text-2xl lg:text-lg text-xs xl:w-64 md:w-32 w-28 md:w-42 py-2">
                  Wheelchair Accessibility Options
                </p>
              </div>
              <div className="w-1/2 grid place-items-center md:basis-1/4">
                <img
                  className="xl:w-52 lg:w-36 md:w-42 w-20 pt-8 md:py-0"
                  src={pricing}
                  alt="pricing image"
                />
                <p className="xl:text-2xl lg:text-lg text-xs xl:w-64 lg:w-48 w-32 py-2">
                  Transparent Fees. Insurance Accepted.
                </p>
              </div>
            </div>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
