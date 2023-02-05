// BUILD YOUR SERVER HERE
const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send("Welcome")
})

server.get('/api/users', (req, res) => {
  res.send("users")
} )



module.exports = server; // EXPORT YOUR SERVER instead of {}
