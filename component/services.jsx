import React from 'react';

import Bussinessman1 from '../picture/Business man 1.svg';
import Bussinessman2 from '../picture/Business man 2.svg';
import Slack from '../picture/Slack.svg';
import Facebook from '../picture/Facebook.svg';
import Googledocs from '../picture/Google docs.svg';
import Gmail from '../picture/Gmail.svg';
import Twitter from '../picture/Twitter.svg';

function Services() {
  return (
    <aside className='services'>
      <div className='services-header'>
        Orchestrate powerful business solutions with a single source of truth
        that is trusted by the industries leading organisations
      </div>
      <section className='serivces-slogan-wrapper'>
        <div className='serivces-slogan-wrapper1'>
          <img
            className='serices-bussinessman'
            alt='you will success'
            src={Bussinessman1}
          />
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
        </div>
        <div className='serivces-slogan-wrapper2'>
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
          <img
            className='serices-bussinessman1'
            alt='you will success'
            src={Bussinessman2}
          />
        </div>
      </section>
      <section className='serivces-link-wrapper'>
        <p className='serivces-link-title'>Get more from your existing tools</p>
        <div className='serivces-links'>
          <img
            className='serivces-link-logo serivces-link-logo1'
            alt='Slack'
            src={Slack}
          />
          <img
            className='serivces-link-logo serivces-link-logo2'
            alt='Facebook'
            src={Facebook}
          />
          <img
            className='serivces-link-logo serivces-link-logo3'
            alt='Google Docs'
            src={Googledocs}
          />
          <img
            className='serivces-link-logo serivces-link-logo4'
            alt='Gmail'
            src={Gmail}
          />
          <img
            className='serivces-link-logo serivces-link-logo5'
            alt='Twitter'
            src={Twitter}
          />
        </div>
        <div className='services-link-button'>Explore Integrations</div>
      </section>
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
    </aside>
  );
}

export default Services;
