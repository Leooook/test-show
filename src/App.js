import React from 'react';

import './App.css';
import Hero from './component/hero';
import Services from './component/services';
import Footer from './component/footer';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
