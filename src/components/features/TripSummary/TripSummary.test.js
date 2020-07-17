import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct url for Trip', () => {
    const expectedUrl = 'abc';
    const component = shallow(<TripSummary id={expectedUrl} tags={[]} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedUrl}`);
    console.log(component.debug());
  });
});