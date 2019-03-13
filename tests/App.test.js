import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import App from '../src/components/App';

const wrapper = mount(<App />);
describe('<App />', () => {
  it('should check that a div exists', () => {
    expect(wrapper.find('div').exists()).toBeTruthy();
  });

  it('should check that a Header exists', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('should check that a Route exists', () => {
    expect(wrapper.find('Route').length).toEqual(1);
  });
});