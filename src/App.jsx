import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../src/components/Head';
import Footer from '../src/components/Footer';
import About from '../src/components/About';
import Contact from '../src/components/Contact_us';
import Home from '../src/components/Home';
import Donate from './components/Donate';
import Why from './components/Why';
import Need from './components/Need';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <div
          id="page-container"
          style={{ marginTop: '50px', position: 'relative', minHeight: '84vh' }}
        >
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/why" element={<Why />} />
              <Route path="/need" element={<Need />} />
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
