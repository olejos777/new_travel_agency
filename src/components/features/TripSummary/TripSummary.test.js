import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct url for Trip', () => {
    const expectedUrl = 'abc';
    const component = shallow(<TripSummary id={expectedUrl} tags={[]} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedUrl}`);
  });

  /*it('should render correct alt and src of image', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'pictureName';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });*/

  it('should render correct alt and src of image', () => {
    const component = shallow(<TripSummary name='Lorem ipsum' image='imageSrc' tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should render correct name, cost, days', () => {
    const component = shallow(<TripSummary name='Lorem ipsum' cost='hundred' days={1} tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags without crashing', () => {
    const expectedTags = ['first', 'second', 'third'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tag').at(0)).toEqual[expectedTags[0]];
    expect(component.find('.tag').at(1)).toEqual[expectedTags[1]];
    expect(component.find('.tag').at(2)).toEqual[expectedTags[2]];
  });
});