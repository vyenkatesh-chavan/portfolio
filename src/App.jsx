import React, { useState } from 'react';
import Navbar from './compent/Navbar';
import Home from './compent/Home';

import Projects from './compent/Project';
import About from './compent/About';
import Contact from './compent/Contact';

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="App">
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <Home />
      
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
