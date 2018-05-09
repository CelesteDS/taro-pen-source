const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

const { dealHand } = require('./tarot')

app.get('/basicthreecard', (req, res) =>{
  res.send(dealHand(3))
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
