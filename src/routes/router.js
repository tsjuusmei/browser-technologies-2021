const express = require('express')
const bodyParser = require('body-parser')

const { login } = require('./renders/login')
const { loginPost } = require('./posts/loginPost')

const router = express.Router()

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/', login)

router.post('/dashboard', urlencodedParser, loginPost)

module.exports = router