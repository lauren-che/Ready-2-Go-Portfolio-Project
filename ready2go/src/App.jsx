import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HomeServices from './components/HomeServices';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
        <HomeServices />
        <Benefits />
        <Testimonials />
        <About />
        <Services />
        <Footer />
      </div>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/services/#faq" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
