'use strict'

var express = require('express')
var movieController = require('../controller/movie.controller')

var api = express.Router()

api.get('/movie', movieController.list)

module.exports = api
