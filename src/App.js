import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyles'
import HeroSection from './components/Herosection'
import Products from './components/Products'
import { DesertData, ProductData } from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <HeroSection />
      <Products heading="Choose Your meal" data={ProductData}/>
      <Feature />
      <Products heading="Choose Your Desert" data={DesertData}/>
      <Footer />
    </Router>
  );
}

export default App;
