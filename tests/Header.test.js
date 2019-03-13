import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Header from '../src/components/Header';

const wrapper = mount(<Header />);
describe('<Header />', () => {
  it('should check that a p tag exists', () => {
    expect(wrapper.find('p').exists()).toBeTruthy();
  });

  it('should check that a Header exists', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });
});
