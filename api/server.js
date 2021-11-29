const express = require('express')
const Users = require('./users/model')

const server = express()

server.user(express.json())

module.exports = server
