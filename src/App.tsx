import React from 'react';
import './App.css';
import About from './components/About';
import Carousel from './components/Carousel';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Founder from './components/Founder';
import Header from './components/Header';
import Mint from './components/Mint';
import Press from './components/Press';

function App() {
  return (
    <div className="App">
      <Header />
      <Mint />
      <About />
      <Carousel />
      <FAQ />
      <Founder />
      <Press />
      <Footer />
    </div>
  );
}

export default App;
