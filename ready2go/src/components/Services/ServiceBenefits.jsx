import { CheckIcon } from '@heroicons/react/20/solid';
import driver1 from '../../assets/driver1.svg';
import driver2 from '../../assets/driver2.png';
import van from '../../assets/vanimage.png';
import cars from '../../assets/carservice.svg';

const ServiceBenefits = () => {
  return (
    <div>
      {/* Our Benefits Section */}
      <div className="mx-auto max-w-5xl my-40 text-center">
        <h2 className="text-2xl font-semibold leading-7 uppercase tracking-widest pb-6">
          ride benefits
        </h2>
        <p className="mt-2 md:text-4xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We offer a range of services to meet the transportation needs of
          residents in Cleveland, Ohio.
        </p>
      </div>

      {/* Appointments Section */}
      <div className="rounded-t-lg bg-[#232323] relative isolate overflow-hidden px-6 pt-24 pb-32 lg:overflow-visible lg:px-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-2">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-[#FFF5E1]">
                  Appointments
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#FFF5E1] sm:text-4xl">
                  Medical Transportation
                </h1>
                <p className="mt-6 text-xl leading-8 text-[#FFF5E1]">
                  Our medical transportation service provides safe and reliable
                  transportation to and from medical appointments for nursing
                  home residents in Cleveland, Ohio
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-full sm:w-[38rem]"
              src={driver1}
              alt="van driver image"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-[#FFF5E1] lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-[#FF6602]"
                      aria-hidden="true"
                    />
                    <span className="text-[#FFF5E1]">
                      Transportation to and from medical appointments, including
                      visits to hospitals, clinics, and specialty centers
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-[#FF6602]"
                      aria-hidden="true"
                    />
                    <span className="text-[#FFF5E1]">
                      Assistance with mobility and personal care, such as
                      helping clients in and out of the vehicle and providing
                      support during the ride
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-[#FF6602]"
                      aria-hidden="true"
                    />
                    <span className="text-[#FFF5E1]">
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
      <div className="rounded-t-lg bg-[#14968F] relative isolate overflow-hidden -mt-16 px-12 py-16 lg:overflow-visible lg:px-10">
        <div className="container xl:px-12 py-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="text-base font-semibold leading-7 text-[#FFF5E1]">
                Social Events
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#FFF5E1] sm:text-4xl">
                Social Transportation
              </h1>
              <p className="mt-2 text-[#FFF5E1] lg:w-3/4 md:w-full ">
                Our social transportation service offers seniors the opportunity
                to get out and about in Cleveland, Ohio.
              </p>
            </div>
            <div>
              <p className="md:mt-12 mt-10 md:ml-4 text-[#FFF5E1] lg:mr-20">
                We offer transportation to social events, such as visits to
                friends and family, outings to local attractions, and more. Our
                friendly driver can pick you up at your preferred time and
                location that best suits your preference.
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:mb-6 lg:grid-cols-3">
          <img
            src={van}
            alt="van image"
            className="lg:w-10/12 h-52 md:h-96 object-cover rounded-[1.5rem] col-span-2 lg:ml-12"
            loading="lazy"
          />
          <img
            src={driver2}
            alt="driver image"
            className="hidden w-10/12 h-52 object-cover rounded-[1rem] lg:block lg:h-96"
            loading="lazy"
          />
        </div>
        <div className="grid sm:mb-6 lg:grid-cols-4 ml-11 mt-10">
          <div className="bg-[#FFF5E1] rounded-[1.5rem] h-48 col-span-3">
            <div className="grid grid-cols-3">
              <h1 className="text-[6rem] font-bold mt-6 ml-8 justify-center">
                24/7
              </h1>
              <p className="col-span-2 mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                odit laborum corrupti ea magnam optio consequuntur, ad, voluptas
                adipisci aliquid quia repellendus possimus iusto voluptatum
                rerum, libero quod molestiae modi?
              </p>
            </div>
          </div>
          <img
            src={cars}
            alt="driver image"
            className="hidden w-auto h-48 object-cover rounded-[1rem] lg:block ml-10"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;
