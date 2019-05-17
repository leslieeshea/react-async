import React, { useState } from 'react';
import Header from './header/Header';
import TopQuotes from '../containers/quotes/TopQuotes';
import CharacterQuotes from '../containers/quotes/CharacterQuotes';

export default function App() {
  const [quotes, updateQuotes] = useState('top');

  return (
    <>
      <Header />
      <button onClick={() => updateQuotes('top')}>Top Quotes</button>
      <button onClick={() => updateQuotes('character')}>Character Quotes</button>
      {quotes === 'top' && <TopQuotes />}
      {quotes === 'character' && <CharacterQuotes />}
    </>
  );
}
