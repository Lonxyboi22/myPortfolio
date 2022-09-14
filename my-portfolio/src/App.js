import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import Nav from './components/Nav';

import About from './components/pages/About'
import Home from './components/pages/Home'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import Resume from './components/pages/Resume'

import './App.css';


function App() {
  //

  return (
    <div>
      <Navigation />
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/about" element={<About />}  />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
