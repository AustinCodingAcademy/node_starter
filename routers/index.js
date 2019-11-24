const express = require('express')
const controller = require('../controllers')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the API')
})

router.get('/users', (req, res) => {
    const users = controller.getAllUsers()
    res.json(users)
})

module.exports = router