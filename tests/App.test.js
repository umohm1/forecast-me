import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('div').length).toEqual(1)
  expect(wrapper.find('Header').length).toEqual(1);
  expect(wrapper.find('Route').length).toEqual(1);
});
