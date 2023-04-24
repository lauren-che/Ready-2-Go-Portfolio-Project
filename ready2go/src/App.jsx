import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Services /> */}
      {/* <Testimonials /> */}
    </div>
  );
}

export default App;
