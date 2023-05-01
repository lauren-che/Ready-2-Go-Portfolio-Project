import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeServices from './components/HomeServices';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <HomeServices />
      <Benefits />
      <Testimonials />
      <About />
      {/* <Services /> */}
      <Footer />
    </div>
  );
}

export default App;
