// BUILD YOUR SERVER HERE
const express = require('express')
const user = require('./users/model')
const server = express()



server.get('/', (req, res) => {
  res.json("Welcome")
})

server.get('/api/users', (req, res) => {
  user.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({
        message: "error getting users",
        err: err.message
      })
    })
})

server.get('/api/users/:id', (req, res) => {
  user.findById(req.params.id)
    .then(user => {
      if (!user){
        res.status(404).json({
          message: "The user with the specified ID does not exist"
        })
      }
      res.json(user)
    })
    .catch(err => {
      res.status(500).json({
        message: "error getting user",
        err: err.message
      })
    })
})

// server.post('/api/users', (req, res) => {
//   req.insert({user.name, user.bio})
// })

server.use('*', (req, res) => {
  res.status(404).json({
    message: "not found"
  })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
