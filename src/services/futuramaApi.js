export const getQuotes = (count = 10) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quotes.';

      return json;
    });
};

export const getCharacterQuotes = (character, count = 10) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quotes.';

      return json;
    });
};
