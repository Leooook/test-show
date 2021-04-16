import React from 'react';

import Logo from '../picture/Logo.svg';

function Footer() {
  const list1 = [
    'Product',
    'Information',
    'Marketplace',
    'Templates',
    'Universe',
    'Pricing',
  ];
  const list2 = ['Event', 'Case Studies', 'Security'];
  const list3 = ['API', 'Integrations'];
  const list4 = ['About', 'Careers', 'Blog', 'Enterprises'];
  const list5 = ['Questions', 'Terms', 'Priacy'];
  return (
    <aside className='footer'>
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img className='footer-logo' alt='logo' src={Logo} />
        <p className='footer-header'>Property Pathfinder</p>
      </div>
      <div className='footer-line' />
      <section className='footer-info-wrapper'>
        <div className='footer-info-l'>
          <ul className='footer-info-list'>
            {list1.map((each, key) => (
              <li className='footer-font' key={key}>
                {each}
              </li>
            ))}
          </ul>
          <ul className='footer-info-list footer-info-list1'>
            {list2.map((each, key) => (
              <li className='footer-font' key={key}>
                {each}
              </li>
            ))}
            {list3.map((each, key) => (
              <li className='footer-font footer-font-web' key={key}>
                {each}
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-info-r'>
          <ul className='footer-info-list'>
            {list4.map((each, key) => (
              <li className='footer-font' key={key}>
                {each}
              </li>
            ))}
          </ul>
          <ul className='footer-info-list'>
            <li className=' footer-font footer-font-link footer-font-web'>
              We're Hiring!
            </li>
            {list5.map((each, key) => (
              <li className='footer-font' key={key}>
                {each}
              </li>
            ))}
            {list3.map((each, key) => (
              <li className='footer-font footer-font-mobile' key={key}>
                {each}
              </li>
            ))}
            <li className=' footer-font footer-font-link footer-font-mobile '>
              We're Hiring!
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
}

export default Footer;
