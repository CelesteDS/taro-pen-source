require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

const dealCards = require('./actions/dealCards')
const getCardsByDeck = require('./actions/getCardsByDeck')
const getDecks = require('./actions/getDecks')

app.use(cors())

app.get('/deck/:deckName/deal/:numberOfCards', (req, res, next) => {
  dealCards(Number(req.params.numberOfCards), req.params.deckName)
    .then((result) => {
      res.send(result)
    })
    .catch(err => next(err))
})

app.get('/deck/:deckName', (req, res, next) => {
  const requestedDeck = req.params.deckName.toLowerCase()
  // first check if requested deck exists, if so return all cards
  // from that deck, if not, throw error
  getDecks()
    .then((decks) => {
      if(decks.map(deckObject => deckObject.name).includes(requestedDeck)) {
        getCardsByDeck(req.params.deckName)
          .then((result) => {
            res.send(result)
          })
      } else {
        next(new Error(`No deck exists with the name ${requestedDeck}`))
      }
    })
    .catch(err => next(err))
})

app.get('/decks', (req, res, next) => {
  getDecks()
    .then((results) => {
      res.send(results.map(deckObject => deckObject.name))
    })
    .catch(err => next(err))
})

app.get('/', (req, res, next) => {
  console.log('In home route, bout to send placeholder')
  res.status(200).send('This is a placeholder homepage')

})

app.get('*', (req, res, next) => {
  console.log('in default route, about to send placeholder')
  res.status(200).send('This is a placeholder homepage')
  // res.status(404).send('Sorry, that page doesn\'t exist.')
})

app.use((err, req, res, next) => {
  res.status(400).send(`There was an error: ${err.message}`)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
