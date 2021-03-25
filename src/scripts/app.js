const ejs = require('ejs')
const bodyParser = require('body-parser')
const path = require('path')
const express = require('express');
const app = express()
const port = 3000;

const render = require('./modules/render.js')

const templates = path.join(__dirname, '../views')

app
    .engine('.ejs', ejs.__express)
    .set('views', templates)
    .set('view engine', 'ejs')
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: true}))
    .use(bodyParser.json())
    .use(express.json())
    .post('/login-redirect', render.loginPost)
    .post('/:id/enq-redirect/:course', render.enqPost)
    .get('/:id/home', render.home)
    .get('/:id/enq/:course', render.course)
    .get('/', redirect)
    .get('/login', render.login)
    .get('*', error)

function redirect(req, res) {
    res.redirect('/login');
}

function error(req, res) {
    res.status(404).render('not-found', {
        title: '404 Not Found'
    })
}

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})