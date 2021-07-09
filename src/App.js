import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyles'
import HeroSection from './components/Herosection'
import Products from './components/Products'
import { ProductData } from './components/Products/data'
function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <HeroSection />
      <Products heading="Choose Your meal" data={ProductData}/>
    </Router>
  );
}

export default App;
