import { useState } from 'react';
import './App.css';
import Landing from './pages/Landing';
import Services from './pages/Services';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/#faq" element={<Services />} />
      </Routes>

    </Router>
  );
}

export default App;
