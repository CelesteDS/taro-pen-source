const db = require('../db/db')

/**
 * Gets a list of the different decks available.
 * @return {Promise} Promise resolving to an array of
 *                   objects representing the decks with the key 'name'.
 */
module.exports = function getDecks () {
  const query = 'SELECT * FROM decks'
  return db.any(query)
}
