import React from 'react';
import Enzyme from './jestsetup';

import Serivces from '../component/services';

const { shallow } = Enzyme;
const wrapper = shallow(<Serivces />);

describe('<Services /> info test', () => {
  it('services header', () => {
    expect(
      wrapper.containsMatchingElement(
        <div className='services-header'>
          Orchestrate powerful business solutions with a single source of truth
          that is trusted by the industries leading organisations
        </div>
      )
    ).toEqual(true);
  });

  it('services solgan info & info2', () => {
    expect(
      wrapper.containsMatchingElement(
        <div className='serivces-slogan-info1'>
          <h3 className='serivces-slogan-title'>Get started in a snap</h3>
          <div className='services-slogan-mobile'>
            <p className='serivces-slogan-font'>
              From day one, your team will love the familiarity & power of the
              database
            </p>
            <div className='serivces-slogan-link'>Explore</div>
          </div>
        </div>
      )
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(
        <div className='serivces-slogan-info2'>
          <h3 className='serivces-slogan-title serivces-slogan-title1'>
            Grow as you go
          </h3>
          <div className='services-slogan-mobile1'>
            <p className='serivces-slogan-font serivces-slogan-font1'>
              Property Pathfinder evolves with you & your team, fast tracking
              the development of your workflow
            </p>
            <div className='serivces-slogan-link serivces-slogan-link1'>
              Explore cases
            </div>
          </div>
        </div>
      )
    ).toEqual(true);
  });

  it('serivces promotion section', () => {
    expect(
      wrapper.containsMatchingElement(
        <section className='services-promotion-wrapper'>
          <h1 className='services-promotion-header'>
            Take Property Pathfinder for a spin!
          </h1>
          <p className='services-promotion-font'>
            Property Pathfinder is free to use for teams of any size, with paid
            plans available for additional support & features.
          </p>
          <div className='services-promotion-button'>Sign up free</div>
        </section>
      )
    ).toEqual(true);
  });
});
