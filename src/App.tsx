import React, { useState } from 'react';
import { Language } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState<Language>('FR');

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Portfolio language={language} />
      <Pricing language={language} />
      <Testimonials language={language} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;