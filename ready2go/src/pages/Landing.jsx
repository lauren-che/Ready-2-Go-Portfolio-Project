import Nav from '../components/Nav';
import Hero from '../components/Landing/Hero';
import HomeServices from '../components/Landing/HomeServices';
import Benefits from '../components/Landing/Benefits';
import Testimonials from '../components/Landing/Testimonials';
import About from '../components/Landing/About';
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
