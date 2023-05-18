import Image from 'next/image';
import Hero from '@components/Hero';
import HomeServices from '@components/HomeServices';
import Benefits from '@components/Benefits';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Hero />
      <HomeServices />
      <Benefits />
    </section>
  );
}
