import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Forecast from '../src/components/Forecast';

describe('<Forecast />', () => {
  it('should check that p tags exist', () => {
    const wrapper = mount(
      <Forecast
        forecastData={{ icon: 'CLEAR_DAY' }}
        zipCodeData={{ State: '' }}
      />
    ); 
    expect(wrapper.find('p').length).toBe(3);
  });
});

