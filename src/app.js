const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

const { dealHand } = require('./tarot')

app.get('/deal/:numberOfCards', (req, res) => {
  res.send(dealHand(Number(req.params.numberOfCards)))
})

app.use((err, req, res, next) => {
  res.status(400).send(`There was an error: ${err.message}`)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
