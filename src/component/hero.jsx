import React from 'react';

import Nav from './nav';
import Logo from '../picture/Logo.svg';

function Hero() {
  return (
    <header className='hero-wrapper'>
      <section className='hero-promotional-wrapper'>
        <p className='hero-promotional-content'>
          Cutting edge marketing teams run content on Property Pathfinder.
        </p>
        <p className='hero-promotional-link'>Learn how</p>
      </section>
      <Nav />
      <div className='hero-mobile-wrapper'>
        <img className='nav-logo-mobile' alt='logo' src={Logo} />
        <p className='hero-solgan'>Navigating your Road to Ready™</p>
        <div className='hero-signup'>Sign up free</div>
      </div>
    </header>
  );
}

export default Hero;
