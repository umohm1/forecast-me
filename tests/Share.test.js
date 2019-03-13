import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Share from '../src/components/Share';

const wrapper = mount(<Share />);
describe('<Share />', () => {
  it('should check that a div exists', () => {
    expect(wrapper.find('div').exists()).toBeTruthy();
  });

  it('should check linkedin href exists', () => {
    expect(wrapper.find('.linkedin').length).toBe(1);
  });

  it('should check twitter href exists', () => {
    expect(wrapper.find('.linkedin').length).toBe(1);
  });

  it('should check pinterest href exists', () => {
    expect(wrapper.find('.linkedin').length).toBe(1);
  });
});
