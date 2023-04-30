import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeServices from './components/HomeServices';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeServices />
      {/* <Services /> */}
      {/* <Testimonials /> */}
    </div>
  );
}

export default App;
