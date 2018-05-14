CREATE type card_name AS ENUM ('The Fool',
'The Magician',
'The High Priestess',
'The Empress',
'The Emperor',
'The Hierophant',
'The Lovers',
'The Chariot',
'Justice',
'The Hermit',
'Wheel of Fortune',
'Strength',
'The Hanged Man',
'Death',
'Temperance',
'The Devil',
'The Tower',
'The Star',
'The Moon',
'The Sun',
'Judgement',
'The World');

CREATE TABLE decks (
  name TEXT PRIMARY KEY
);

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  name card_name NOT NULL,
  deck_name TEXT REFERENCES decks NOT NULL,
  image_url TEXT NOT NULL,
  image_description TEXT
);
