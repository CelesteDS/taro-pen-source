const { expect } = require('chai')
const db = require('../../src/db/db')

const getDecks = require('../../src/actions/getDecks')
const getCardsByDeck = require('../../src/actions/getCardsByDeck')
const dealCards = require('../../src/actions/dealCards')

describe('getDecks', () => {
  let decks
  before('get the deck data', () => {
    return getDecks()
      .then((result) => {
        decks = result
      })
  })
  it('gets all decks', () => {
    expect(decks).to.have.length(1)
    expect(decks[0].name).to.equal('animal')
  })
})

describe('getCardsByDeck', () => {
  let cards
  before('get all cards from animal deck', () => {
    return getCardsByDeck('animal')
      .then((result) => {
        cards = result
      })
  })
  it('gets the right number of cards', () => {
    expect(cards.length).to.equal(22)
  })
  it('has the right keys for a card', () => {
    expect(cards[0]).to.have.property('name')
    expect(cards[0]).to.have.property('image_url')
    expect(cards[0]).to.have.property('id')
  })
})

describe('dealCards', () => {
  let hand
  before('get a hand of size 4', () => {
    return dealCards(22, 'animal')
      .then((result) => {
        hand = result
      })
  })
  it('has the right number of cards', () => {
    expect(hand.length).to.equal(22)
  })
  it('has unique cards', () => {
    let uniqueCardsInHand = new Set(hand.map(cardObject => cardObject.name))
    expect(uniqueCardsInHand.size).to.equal(hand.length)
  })
})
