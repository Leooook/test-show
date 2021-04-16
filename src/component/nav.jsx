import React, { Component } from 'react';

import Logo from '../picture/Logo.svg';
import Arrow1 from '../picture/Arrow1.svg';
import Arrow2 from '../picture/Arrow2.svg';
import Arrow3 from '../picture/Arrow3.svg';
import Arrow4 from '../picture/Arrow4.svg';
import Arrow5 from '../picture/Arrow5.svg';
import Cross from '../picture/Cross.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_trigger: '',
      product_trigger: '',
      solutions_trigger: '',
      resources_trigger: '',
    };
  }

  // Handle the Nav open or Close
  handleNav = () => {
    if (this.state.nav_trigger === '') {
      this.setState({ nav_trigger: 'nav-open' });
    } else {
      this.setState({ nav_trigger: '' });
    }
  };

  // Handle the three trigers open
  handleOn = (name) => {
    if (name === 'product') {
      this.setState({ product_trigger: 'nav-open' });
    } else if (name === 'solutions') {
      this.setState({ solutions_trigger: 'nav-open' });
    } else {
      this.setState({ resources_trigger: 'nav-open' });
    }
  };

  // Handle the three trigers close
  handleOff = (name) => {
    if (name === 'product') {
      this.setState({ product_trigger: '' });
    } else if (name === 'solutions') {
      this.setState({ solutions_trigger: '' });
    } else {
      this.setState({ resources_trigger: '' });
    }
  };

  render() {
    const list1 = ['Overview', 'Integrations', 'Marketplace', 'What’s new'];
    const list2 = ['Views', 'Automations', 'Sync', 'Reporting'];
    const list3 = [
      'Marketing',
      'Product',
      'Operations',
      'HR',
      'Sales',
      'Finance',
    ];
    const list4 = [
      'Content operations',
      'Product roadmap',
      'Project tracker',
      'Social media calendar',
      'Market campaign tracker',
    ];
    const list5 = [
      'Property Pathfinder support',
      'Blog',
      'Downloads',
      'Developers',
    ];
    return (
      <section>
        <div
          id='nav-trigger'
          className='nav-trigger'
          onClick={() => this.handleNav()}
        >
          <img className='nav-trigger-arrow' alt='cross' src={Arrow4} />
        </div>
        <div className={`nav-menu nav-small-title ${this.state.nav_trigger}`}>
          Menu
          <img
            className='nav-menu-cross'
            onClick={() => this.handleNav()}
            alt='cross'
            src={Cross}
          />
        </div>
        <div className={`nav-wrapper ${this.state.nav_trigger}`}>
          <img className='nav-logo' alt='logo' src={Logo} />
          <div className='nav-title'>Property Pathfinder</div>
          <ul className='nav-bar'>
            <li
              id='product_trigger'
              className={
                this.state.product_trigger === ''
                  ? 'nav-bar-list'
                  : ' nav-bar-list nav-bar-font'
              }
              onMouseOver={() => this.handleOn('product')}
              onMouseOut={() => this.handleOff('product')}
              onClick={() => this.handleOn('product')}
            >
              <p className='nav-bar-tit'>Products</p>
              {this.state.product_trigger === '' ? (
                <img className='nav-arrow' alt='arrow' src={Arrow1} />
              ) : (
                <img className='nav-arrow' alt='arrow' src={Arrow2} />
              )}
            </li>
            <li
              id='solutions_trigger'
              className={
                this.state.solutions_trigger === ''
                  ? 'nav-bar-list'
                  : 'nav-bar-list nav-bar-font'
              }
              onMouseOver={() => this.handleOn('solutions')}
              onMouseOut={() => this.handleOff('solutions')}
              onClick={() => this.handleOn('solutions')}
            >
              <p className='nav-bar-tit'>Solutions</p>
              {this.state.solutions_trigger === '' ? (
                <img className='nav-arrow' alt='arrow' src={Arrow1} />
              ) : (
                <img className='nav-arrow' alt='arrow' src={Arrow2} />
              )}
            </li>
            <li className='nav-bar-list'>
              <p className='nav-bar-tit-other'>Enterprise</p>
            </li>
            <li
              id='resources_trigger'
              className={
                this.state.resources_trigger === ''
                  ? 'nav-bar-list'
                  : 'nav-bar-list nav-bar-font'
              }
              onMouseOver={() => this.handleOn('resources')}
              onMouseOut={() => this.handleOff('resources')}
              onClick={() => this.handleOn('resources')}
            >
              <p className='nav-bar-tit'>Resources</p>
              {this.state.resources_trigger === '' ? (
                <img className='nav-arrow' alt='arrow' src={Arrow1} />
              ) : (
                <img className='nav-arrow' alt='arrow' src={Arrow2} />
              )}
            </li>
            <li className='nav-bar-list'>
              <p className=' nav-bar-tit-other'>Contact Sales</p>
            </li>
          </ul>
          <div className='nav-signin'>Sign in</div>
        </div>
        <div
          id='product_trigger1'
          className={`nav-list-wrapper nav-list-wrapper-product ${this.state.product_trigger}`}
          onMouseOver={() => this.handleOn('product')}
          onMouseOut={() => this.handleOff('product')}
        >
          <div
            id='product_trigger2'
            className='nav-mobile-trigger'
            onClick={() => this.handleOff('product')}
          >
            Product
            <img className='nav-left-arrow' alt='arrow' src={Arrow5} />
          </div>
          <ul className='nav-small-list'>
            {list1.map((each, key) => (
              <li className='nav-small-member' key={key}>
                {each}
              </li>
            ))}
          </ul>
          <p className='nav-small-title'>Features</p>
          <ul className='nav-small-list nav-small-list2'>
            {list2.map((each, key) => (
              <li className='nav-small-member' key={key}>
                {each}
              </li>
            ))}
          </ul>
        </div>
        <div
          id='solutions_trigger1'
          className={`nav-list-wrapper nav-list-wrapper-solutions ${this.state.solutions_trigger}`}
          onMouseOver={() => this.handleOn('solutions')}
          onMouseOut={() => this.handleOff('solutions')}
        >
          <div
            id='solutions_trigger2'
            className='nav-mobile-trigger'
            onClick={() => this.handleOff('solutions')}
          >
            Solutions
            <img className='nav-left-arrow' alt='arrow' src={Arrow5} />
          </div>
          <div>
            <p className='nav-small-title'>By Team</p>
            <ul className='nav-small-list nav-small-list2'>
              {list3.map((each, key) => (
                <li className='nav-small-member' key={key}>
                  {each}
                </li>
              ))}
            </ul>
            <p className='nav-small-title'>Templates</p>
            <p className='nav-small-member nav-small-list2'>{list4[0]}</p>
          </div>
          <ul className='nav-small-list nav-small-list2 nav-small-list3'>
            {list4.slice(1).map((each, key) => (
              <li className='nav-small-member nav-small-member2' key={key}>
                {each}
              </li>
            ))}
            <li className='nav-small-member nav-small-link'>
              See all templates
              <img className='nav-left-arrow' alt='arrow' src={Arrow3} />
            </li>
          </ul>
        </div>
        <div
          id='resources_trigger1'
          className={`nav-list-wrapper nav-list-wrapper-resources ${this.state.resources_trigger}`}
          onMouseOver={() => this.handleOn('resources')}
          onMouseOut={() => this.handleOff('resources')}
        >
          <div
            id='resources_trigger2'
            className='nav-mobile-trigger'
            onClick={() => this.handleOff('resources')}
          >
            Resources
            <img className='nav-left-arrow' alt='arrow' src={Arrow5} />
          </div>
          <ul className='nav-small-list'>
            {list5.map((each, key) => (
              <li className='nav-small-member nav-small-member2' key={key}>
                {each}
              </li>
            ))}
          </ul>
          <div className='nav-small-line' />
          <p className='nav-small-end'>Templates</p>
          <p className='nav-small-end'>Universe</p>
        </div>
      </section>
    );
  }
}

export default Nav;
