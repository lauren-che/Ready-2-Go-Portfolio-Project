import Nav from '../components/Nav';
import Hero from '../components/Hero';
import HomeServices from '../components/HomeServices';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div>
        <Nav />
        <Hero />
        <HomeServices />
        <Benefits />
        <Testimonials />
        <About />
        <Footer />
    </div>
  )
}
