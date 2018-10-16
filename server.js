'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('index.html')
  next()
})

app.listen(port, () => {
    console.log(`Listening on post ${port}`)
})