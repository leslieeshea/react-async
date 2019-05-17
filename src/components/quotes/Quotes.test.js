import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('renders a list of quotes', () => {
    const quotes = [
      {
        character: 'Fry',
        quote: 'This is my quote',
        image: '/image'
      },
      {
        character: 'Bender',
        quote: 'This is my quote too',
        image: '/image'
      }
    ];

    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
