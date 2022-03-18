'use strict'

var express = require('express')

var app = express();
const morgan = require('morgan')

app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//load routes
var movieRoute = require('./route/movie.route')

/* routes */

//base route
app.use('/api/', movieRoute)

//module conversion
module.exports = app;