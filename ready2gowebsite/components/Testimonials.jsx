'use client';

import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dianne Russell',
      testimonial:
        "I used  Ready 2 Go Transportation for a doctor's appointment and was impressed with their service. The driver was courteous and attentive, and the van was clean and comfortable. I highly recommend them for anyone in need of reliable and compassionate transportation services.",
      location: 'Solon, OH',
    },
    {
      name: 'Cody Jackson',
      testimonial:
        'I had a great experience with Ready 2 Go Transportation. The van was comfortable and clean, the driver was professional and accommodating, and the attention to detail was impressive. I highly recommend their services.',
      location: 'Euclid, OH',
    },
    {
      name: 'Elanor Pena',
      testimonial:
        'I had a fantastic experience with Ready 2 Go Transportation when I used their services to attend a social event. The driver picked me up from my care facitlity and was friendly and engaging, the van was spacious and comfortable, and the ride was enjoyable. I would highly recommend their services to everyone.',
      location: 'Beachwood, OH',
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section id="testimonials" className="bg-[#232323] py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-[#FF6602] font-semibold pb-6 md:text-4xl">
            What Our Customers Are Saying
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-[#FFF5E1] text-lg font-semibold sm:text-xl">
                        “{item.testimonial}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <div className="mt-3">
                        <span className="block text-[#FFF5E1] font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-[#FFF5E1] text-sm mt-0.5">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ''
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-[#14968F] focus:ring ${
                    currentTestimonial == idx ? 'bg-[#14968F]' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;