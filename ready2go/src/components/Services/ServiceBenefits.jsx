import { CheckIcon } from '@heroicons/react/20/solid';
import driver1 from '../../assets/driver1.svg';
import driver2 from '../../assets/driver2.png';
import van from '../../assets/vanimage.png';
import cars from '../../assets/carservice.svg';
import outwardarrow from '../../assets/outwardarrow.svg';
import orangeclock from '../../assets/orangeclock.svg';
import orangecard from '../../assets/orangecard.svg';
import pricetag from '../../assets/pricetag.svg';

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
      <div className="rounded-t-lg bg-[#14968F] relative isolate overflow-hidden -mt-16 px-12 pt-16 pb-24 lg:overflow-visible lg:px-10">
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
        <div className="grid sm:mb-6 lg:grid-cols-4 lg:ml-11 mt-10 lg:w-11/12 w-full">
          <div className="bg-[#FFF5E1] rounded-[1.5rem] md:h-48 h-72 col-span-3 overflow-hidden">
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
          <img
            src={cars}
            alt="driver image"
            className="hidden w-auto h-48 object-cover rounded-[1rem] lg:block ml-10"
            loading="lazy"
          />
        </div>
      </div>

      {/* Vehicle Options Section */}
      <div className="rounded-t-lg bg-[#232323] relative isolate overflow-hidden -mt-16 px-6 md:pt-24 pt-8 pb-32 lg:overflow-visible lg:px-10">
        <div className="grid md:grid-cols-3 grid-cols-1 py-12 px-6">
          <div className="col-span-2">
            <h1 className="xl:ml-10 my-2 text-3xl font-bold tracking-tight text-[#FFF5E1] sm:text-4xl lg:leading-2">
              We also offer a range of vehicle options to suit your specific
              needs.
            </h1>
            <p className="py-4 xl:ml-10 lg:mr-20 text-[#FFF5E1]">
              At Ready 2 Go Transportation, we are committed to providing
              inclusive transportation solutions for all members of our
              community. We understand that mobility can be a challenge for
              individuals with disabilities or those who use wheelchairs, and
              that&apos;s why we offer wheelchair accessible vehicle options to
              suit your specific needs.
            </p>
          </div>
          <div className="lg:ml-20 md:ml-6">
            <a
              href="#"
              className="relative inline-flex left-0 block md:flex-col xl:px-12 lg:px-8 md:px-5 px-20 lg:py-16 md:py-20 py-2 mt-4 text-center overflow-hidden text-lg font-medium text-[#FFF5E1] border-2 border-[#FF6602] rounded-lg group hover:bg-[#FF6602] hover:translate-y-3 transition duration-150 ease-out hover:ease-in flex-row-reverse md:items-center"
            >
              <img
                src={outwardarrow}
                alt="outward arrow"
                className="md:w-1/2 w-[2rem] mx-1 flex-row-reverse"
              />
              <span className="relative md:text-2xl text-xl w-full">
                Book A Ride
              </span>
            </a>
          </div>

          {/* second row or 3 tier information */}
        </div>
        <div className="container px-6 md:py-12 py-6 mx-auto md:mt-12 text-[#FFF5E1]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <img src={orangeclock} alt="orange clock" className="w-[4rem]" />

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
              <img
                src={orangecard}
                alt="orange credit card"
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
              <img src={pricetag} alt="price tag" className="w-[4rem]" />
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
    </div>
  );
};

export default ServiceBenefits;
