import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Forecast from '../src/components/Forecast';

describe('<Forecast />', () => {
  const props = {...forecastData};
const wrapper = mount(<Forecast{...props} />);
  it('should check that p tags exists', () => {
    expect(wrapper.find('p').length).toBe(3);
  });
});

// describe('<Forecast />', () => {
//   it('should check that p tags exist', () => {
//     const wrapper = mount(<Forecast />);
//     expect(wrapper.find('p').length).toBe(3);
//   });
// });