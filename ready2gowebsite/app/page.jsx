import Image from 'next/image';
import Hero from '@components/Hero';
import HomeServices from '@components/HomeServices';
import Benefits from '@components/Benefits';
import Testimonials from '@components/Testimonials';
import About from '@components/About';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Hero />
      <HomeServices />
      <Benefits />
      <Testimonials />
      <About />
    </section>
  );
}
