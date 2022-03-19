'use strict'

var express = require('express')
var controller = require('../controller/transaction.controller')

var api = express.Router()

api.post('/transaction', controller.pay)

module.exports = api
