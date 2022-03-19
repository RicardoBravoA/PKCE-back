'use strict'

var express = require('express')
var controller = require('../controller/transaction.controller')

var api = express.Router()

api.get('/transaction', controller.pay)

module.exports = api
