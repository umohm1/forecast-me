import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Loading from '../src/components/Loading';

const wrapper = mount(<Loading />);
describe('<Loading />', () => {
  it('should check that a div exists', () => {
    expect(wrapper.find('div').exists()).toBeTruthy();
  });

  it('should check that a Loading exists', () => {
    expect(wrapper.find('Loading').length).toEqual(1);
  });
});
