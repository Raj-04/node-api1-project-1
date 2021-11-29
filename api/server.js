const express = require('express')
const Users = require('./users/model')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ message: 'api is running' })
})

server.get('/api/users', async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: "The users information could not be retrieved" })
    }
})

module.exports = server
