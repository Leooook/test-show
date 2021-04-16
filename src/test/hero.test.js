import React from 'react';
import Enzyme from './jestsetup';

import Hero from '../component/hero.jsx';

const { shallow } = Enzyme;
const wrapper = shallow(<Hero />);

describe('<Hero /> info test', () => {
  it('hero section', () => {
    expect(
      wrapper.containsMatchingElement(
        <section className='hero-promotional-wrapper'>
          <p className='hero-promotional-content'>
            Cutting edge marketing teams run content on Property Pathfinder.
          </p>
          <p className='hero-promotional-link'>Learn how</p>
        </section>
      )
    ).toEqual(true);
  });

  it('hero paragraph', () => {
    expect(
      wrapper.containsMatchingElement(
        <p className='hero-solgan'>Navigating your Road to Ready™</p>
      )
    ).toEqual(true);
  });

  it('hero div', () => {
    expect(
      wrapper.containsMatchingElement(
        <div className='hero-signup'>Sign up free</div>
      )
    ).toEqual(true);
  });
});
