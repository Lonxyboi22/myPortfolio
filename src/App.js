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

import Projects from './components/pages/Projects';
import './App.css';

function App() {
  //

  return (
    <div>
      <Navigation />
        <Router>
          <Routes>
            <Route path='/myPortfolio' element={<Home/>} />
            <Route path="/myPortfolio/about" element={<About />}  />
            <Route path="/myPortfolio/projects" element={<Projects />}  />
            <Route path='/myPortfolio/resume' element={<Resume />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
