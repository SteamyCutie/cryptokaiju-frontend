import { useState, useEffect } from 'react'
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
import { ScrollUpButton } from './components/utils/ScrollUpButton'

const App: React.FC = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setOffset(window.pageYOffset > 500 ? 500 : window.pageYOffset);
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        <ScrollUpButton handler={scrollToTop} showButton={showButton} />
      </Router>
    </div>
  );
}

export default App
