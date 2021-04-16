import React from 'react';
import Enzyme from './jestsetup';

import Nav from '../component/nav.jsx';

const { shallow } = Enzyme;
const wrapper = shallow(<Nav />);

describe('<Nav /> state test', () => {
  it('inital value of four triggers', () => {
    expect(wrapper.state('nav_trigger')).toStrictEqual('');
    expect(wrapper.state('product_trigger')).toStrictEqual('');
    expect(wrapper.state('solutions_trigger')).toStrictEqual('');
    expect(wrapper.state('resources_trigger')).toStrictEqual('');
  });
});
describe('<Nav /> action test', () => {
  it('open and close nav_trigger', () => {
    expect(wrapper.state('nav_trigger')).toStrictEqual('');
    wrapper.find('#nav-trigger').simulate('click');
    expect(wrapper.state('nav_trigger')).toStrictEqual('nav-open');
    wrapper.find('#nav-trigger').simulate('click');
    expect(wrapper.state('nav_trigger')).toStrictEqual('');
  });
  it('open and close product_trigger', () => {
    expect(wrapper.state('product_trigger')).toStrictEqual('');
    wrapper.find('#product_trigger').simulate('click');
    expect(wrapper.state('product_trigger')).toStrictEqual('nav-open');
    wrapper.find('#product_trigger2').simulate('click');
    expect(wrapper.state('product_trigger')).toStrictEqual('');
    wrapper.find('#product_trigger').simulate('MouseOver');
    expect(wrapper.state('product_trigger')).toStrictEqual('nav-open');
    wrapper.find('#product_trigger').simulate('MouseOut');
    expect(wrapper.state('product_trigger')).toStrictEqual('');
    wrapper.find('#product_trigger1').simulate('MouseOver');
    expect(wrapper.state('product_trigger')).toStrictEqual('nav-open');
    wrapper.find('#product_trigger1').simulate('MouseOut');
    expect(wrapper.state('product_trigger')).toStrictEqual('');
  });
  it('open and close solutions_trigger', () => {
    expect(wrapper.state('solutions_trigger')).toStrictEqual('');
    wrapper.find('#solutions_trigger').simulate('click');
    expect(wrapper.state('solutions_trigger')).toStrictEqual('nav-open');
    wrapper.find('#solutions_trigger2').simulate('click');
    expect(wrapper.state('solutions_trigger')).toStrictEqual('');
    wrapper.find('#solutions_trigger').simulate('MouseOver');
    expect(wrapper.state('solutions_trigger')).toStrictEqual('nav-open');
    wrapper.find('#solutions_trigger').simulate('MouseOut');
    expect(wrapper.state('solutions_trigger')).toStrictEqual('');
    wrapper.find('#solutions_trigger1').simulate('MouseOver');
    expect(wrapper.state('solutions_trigger')).toStrictEqual('nav-open');
    wrapper.find('#solutions_trigger1').simulate('MouseOut');
    expect(wrapper.state('solutions_trigger')).toStrictEqual('');
  });
  it('open and close resources_trigger', () => {
    expect(wrapper.state('resources_trigger')).toStrictEqual('');
    wrapper.find('#resources_trigger').simulate('click');
    expect(wrapper.state('resources_trigger')).toStrictEqual('nav-open');
    wrapper.find('#resources_trigger2').simulate('click');
    expect(wrapper.state('resources_trigger')).toStrictEqual('');
    wrapper.find('#resources_trigger').simulate('MouseOver');
    expect(wrapper.state('resources_trigger')).toStrictEqual('nav-open');
    wrapper.find('#resources_trigger').simulate('MouseOut');
    expect(wrapper.state('resources_trigger')).toStrictEqual('');
    wrapper.find('#resources_trigger1').simulate('MouseOver');
    expect(wrapper.state('resources_trigger')).toStrictEqual('nav-open');
    wrapper.find('#resources_trigger1').simulate('MouseOut');
    expect(wrapper.state('resources_trigger')).toStrictEqual('');
  });
});
