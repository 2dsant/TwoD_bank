import React from "react";
import { shallow } from 'enzyme';
import { ScrollMenu } from ".";
import Adapter from 'enzyme-adapter-react-16'


describe('ScrollMenu Component', () => {
  it('It should render without errors', () => {
    const component = shallow(<ScrollMenu />);
    console.log(component.debugger)
    const wrapper = component.find('ScrollView');
    expect(wrapper.length).toBe(1);
  });
});
