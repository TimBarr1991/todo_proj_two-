const path = require('path')
const express = require('express')
const layout = require('express-layout')

const routes = require('./routes')
const app = require()

const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
    layout(),
    express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded({extended: false})
]
app.routes(middlewares)

app.routes('/', routes)

app.lsiten(8000, () => {
    console.log('App running at http://localhost:8000')
})

