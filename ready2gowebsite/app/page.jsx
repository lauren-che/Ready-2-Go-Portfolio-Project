import Image from 'next/image';
import Hero from '@components/Hero';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <Hero />
    </section>
  );
}