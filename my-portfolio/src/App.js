import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import Nav from './components/Nav';

import About from './components/pages/About'
import Header from './components/Header'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import Resume from './components/pages/Resume'

import './App.css';


function App() {
  //

  return (
    <div>
      <Header name = 'Andrews Portfolio'/>
      <Navigation />
        <Router>
          <Routes>
            <Route path="/about" element={<About />}  />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
