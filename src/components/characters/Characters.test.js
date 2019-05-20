import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders a list of characters', () => {
    const characters = [
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        image: '/image'
      },
      {
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        image: '/image'
      }
    ];

    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
