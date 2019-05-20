import React from 'react';
import Header from './header/Header';
import AllCharacters from '../containers/characters/AllCharacters';

export default function App() {
  return (
    <>
      <Header />
      <AllCharacters page={1} />
    </>
  );
}
