import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyles'
import HeroSection from './components/Herosection'
function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <HeroSection />
    </Router>
  );
}

export default App;
