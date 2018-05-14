const db = require('../db/db')

const getCardsByDeck = require('./getCardsByDeck')

module.exports = function dealCards(handSize, deckName) {
  return getCardsByDeck(deckName)
    .then((allCards) => {
      return dealHand(handSize, allCards)
    })
}

/**
 * Returns an ordered array of cards.
 * @param  {Number} num How many cards should be in this hand
 * @return {array}     an array of random cards
 */
function dealHand(num, deck=basicDeck) {
  if (isNaN(num)) throw new Error('That\'s not a number.')
  if (num < 0) throw new Error('I can\'t deal a negative number of cards, silly!')
  if (num > deck.length) throw new Error(`I don\'t have that many cards! This deck has ${deck.length} cards.`)
  let result = []
  let usedIndexSet = new Set()
  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * deck.length)
    while(usedIndexSet.has(randomIndex)) {
      randomIndex = Math.floor(Math.random() * deck.length)
    }
    usedIndexSet.add(randomIndex)
    result.push(deck[randomIndex])
  }
  return result
}
