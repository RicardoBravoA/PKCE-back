'use strict'

var express = require('express')

var app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//load routes
const movieRoute = require('./route/movie.route')
const transactionRoute = require('./route/transaction.route')

/* routes */

//base route
app.use('/api/', movieRoute)
app.use('/api/', transactionRoute)

//module conversion
module.exports = app