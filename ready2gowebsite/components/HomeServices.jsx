import Image from 'next/image';

const HomeServices = () => {
  return (
    <div>
      <div className="relative text-center justify-center mx-12">
        <Image
          src="/assets/images/homeService.svg"
          alt="folder image"
          width={1500}
          height={1000}
          className="hidden md:flex"
        />
        <Image
          src="/assets/images/smallfolder.svg"
          alt="small folder image"
          width={1000}
          height={100}
          className="md:hidden pt-16"
        />
        <div>
          <h5 className="w-5/6 font-semibold text-primary-white md:text-2xl xl:text-5xl lg:text-4xl text-xl items-center absolute z-999 xl:top-12 lg:top-28 md:-top-4 top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-tight">
            Our transportation services are designed to cater to all your travel
            needs.
          </h5>
          <div className="md:flex md:flex-nowrap grid grid-cols-2  justify-evenly absolute z-999 top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-tight text-primary-white w-full">
            <div className="home-service-container">
              <Image
                src="/assets/images/rides.svg"
                alt="on-demand rides image"
                width={50}
                height={50}
                className="home-service-image"
              />
              <p className="home-service-text">
                On-Demand Rides Across Cleveland
              </p>
            </div>
            <div className="home-service-container">
              <Image
                src="/assets/images/safe.svg"
                alt="safe image"
                width={50}
                height={50}
                className="home-service-image"
              />
              <p className="home-service-text">Safe & Reliable Drivers</p>
            </div>
            <div className="home-service-container">
              <Image
                src="/assets/images/car.svg"
                alt="car image"
                width={50}
                height={50}
                className="home-service-image"
              />
              <p className="xl:text-xl lg:text-lg text-xs lg:w-52 md:w-32 py-2">
                Wheelchair Accessibile Rides
              </p>
            </div>
            <div className="home-service-container">
              <Image
                src="/assets/images/pricing.svg"
                alt="pricing image"
                width={50}
                height={50}
                className="home-service-image"
              />
              <p className="xl:text-xl lg:text-lg text-xs lg:w-52 md:w-32 py-2">
                We Accept Insurance Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
