const db = require('../db/db')

/**
 * Gets all cards in a given deck
 * @param  {string} deckName name of the deck
 * @return {Promise} - Promise resolving to an array of the cards
 * contained in the deck. Card objects each have an id,
 name, deck_name, image_url, and an optional image_description
 */
module.exports = function getCardsByDeck (deckName) {
  const query = 'SELECT * FROM cards WHERE deck_name = $1'
  return db.any(query, deckName)
}
