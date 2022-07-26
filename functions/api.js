const express = require('express')
const serverless = require('serverless-http')
const axios = require('axios')
const cors = require('cors')

const URL = 'https://zenquotes.io/api/today'

const app = express()
const router = express.Router()

app.use(cors())

router.get('/', async (req, res) => {
  const response = await axios.get(URL)
  const quote = await response.data[0].q
  const author = await response.data[0].a
  console.log(quote, '\n', author)
  res.json({
    q: quote,
    a: author,
  })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
