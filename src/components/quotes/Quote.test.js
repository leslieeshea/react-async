import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('renders a quote', () => {
    const quote = {
      character: 'Fry',
      quote: 'This is my quote',
      image: '/image'
    };

    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
