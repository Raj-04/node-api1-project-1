const express = require('express')
const Users = require('./users/model')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ message: 'api is running' })
})

module.exports = server
