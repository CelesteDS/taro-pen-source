const basicDeck = [
  'The Fool',
  'The Magician',
  'The High Priestess',
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
  'The World',
  'Ace of Wands',
  'Two of Wands',
  'Three of Wands',
  'Four of Wands',
  'Five of Wands',
  'Six of Wands',
  'Seven of Wands',
  'Eight of Wands',
  'Nine of Wands',
  'Ten of Wands',
  'Page of Wands',
  'Knight of Wands',
  'Queen of Wands',
  'King of Wands',
  'Ace of Coins',
  'Two of Coins',
  'Three of Coins',
  'Four of Coins',
  'Five of Coins',
  'Six of Coins',
  'Seven of Coins',
  'Eight of Coins',
  'Nine of Coins',
  'Ten of Coins',
  'Page of Coins',
  'Knight of Coins',
  'Queen of Coins',
  'King of Coins',
  'Ace of Swords',
  'Two of Swords',
  'Three of Swords',
  'Four of Swords',
  'Five of Swords',
  'Six of Swords',
  'Seven of Swords',
  'Eight of Swords',
  'Nine of Swords',
  'Ten of Swords',
  'Page of Swords',
  'Knight of Swords',
  'Queen of Swords',
  'King of Swords',
  'Ace of Cups',
  'Two of Cups',
  'Three of Cups',
  'Four of Cups',
  'Five of Cups',
  'Six of Cups',
  'Seven of Cups',
  'Eight of Cups',
  'Nine of Cups',
  'Ten of Cups',
  'Page of Cups',
  'Knight of Cups',
  'Queen of Cups',
  'King of Cups',
]

/**
 * Returns an ordered array of cards.
 * @param  {Number} num How many cards should be in this hand
 * @return {array}     an array of random cards
 */
function dealHand(num, deck=basicDeck) {
  if (num < 1) return []
  if (num > deck.length) throw new Error('You\'re asking for too many cards!')
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

module.exports = { dealHand }
