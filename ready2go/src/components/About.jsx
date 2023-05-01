import commitment from '../assets/commitment.svg';
import about from '../assets/about.png';

export const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-8 py-28 md:flex-row flex-col lg:items-center">
          <div className="md:flex-grow lg:w-2/3 md:w-1/2 lg:pr-24 lg:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 md:mb-0 items-center text-center">
            <h2 className="text-base text-[#FF6602] pb-2 font-semibold leading-7 uppercase tracking-widest">
              our commitment
            </h2>
            <h1 className="title-font lg:text-4xl md:text-2xl sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Providing Excellent Service and a Welcoming Team to the Residents
              of Cleveland
            </h1>
            <p className="mb-8 leading-relaxed">
              Whether our clients are traveling to medical appointments or
              social events, we strive to exceed their expectations and make
              their experience with us memorable. We are proud to serve the
              Cleveland community and look forward to assisting with all of your
              transportation needs.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-2/5 md:w-1/3 w-7/8 md:ml-6 ">
            <img
              className="object-cover object-center rounded"
              alt="Our Commitment Image"
              src={commitment}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mb-20">
        <div className="container mx-auto flex px-5 md:flex-row flex-col flex-col-reverse lg:items-center">
          <div className="lg:max-w-lg lg:w-2/5 md:w-1/2 w-7/8">
            <img
              className="object-cover object-center rounded"
              alt="About Us Image"
              src={about}
            />
          </div>
          <div className="md:flex-grow lg:w-2/3 md:w-1/2 lg:pl-12 md:pl-8 lg:pr-12 lg:pr-24 flex flex-col md:items-start md:text-left md:mb-16 md:mb-0 items-center text-center">
            <h2 className="text-base text-[#FF6602] pb-2 font-semibold leading-7 uppercase tracking-widest">
              get to know us
            </h2>
            <h1 className="title-font lg:text-4xl sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We&apos;re just getting started
            </h1>
            <p className="mb-8 leading-relaxed">
              At Ready 2 Go Transportation, we understand that transportation
              plays a crucial role in our daily lives, whether it&apos;s for
              commuting to appointments, running errands, or attending special
              events. That&apos;s why we&apos;ve made it our mission to provide
              efficient and dependable transportation services to the Cleveland
              community.
            </p>
            {/* <p>
              We take pride in our team of professional and experienced drivers
              who are dedicated to providing excellent service. They undergo
              rigorous background checks, drug testing, and training to ensure
              that they have the necessary skills and knowledge to safely
              transport our clients. We also prioritize the comfort and
              convenience of our clients. Our fleet of vehicles is regularly
              maintained and equipped with amenities to ensure a comfortable
              ride.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
