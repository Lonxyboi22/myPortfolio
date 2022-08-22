import { useState, useEffect } from 'react';

import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

import './App.css';


function App() {
  //

  return (
    <div>
      <Header name = 'Andrews Portfolio'/>
      <Nav>
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes> */}
      </Nav>
      <Footer />
    </div>
  );
}

export default App;
