// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// Create app
const app = express()
// Use packages
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// Create route
app.get('/posts/:id/comments', (req, res) => {
  res.send([
    {
      id: 1,
      comment: 'Hello world',
      postId: req.params.id
    }
  ])
})
// Listen to port
app.listen(4001, () => {
  console.log('Listening on port 4001')
})