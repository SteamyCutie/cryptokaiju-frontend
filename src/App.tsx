import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

import './App.css'
import About from './components/About'
import Product from './components/Product'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Founder from './components/Founder'
import Header from './components/Header'
import Mint from './components/Mint'
import Press from './components/Press'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Mint />
        <About />
        <Product />
        <FAQ />
        <Founder />
        <Press />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
