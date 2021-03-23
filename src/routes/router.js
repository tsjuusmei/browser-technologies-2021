const express = require('express')
const { login } = require('./renders/login')

const router = express.Router()

router.get('/', login)

router.post('/login', loginPost)

module.exports = router