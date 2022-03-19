'use strict'

var ErrorModel = require('../json/error.json')
const Constant = require('../util/constant')

function serverError(response) {
	response.status(Constant.CODE_500).send({
		message: Constant.SERVER_ERROR
	})
}

function showError(response, id, message) {
	response.status(Constant.CODE_500).send({
		id: id, message: message
	})
}

function errorData(response) {
	response.status(Constant.CODE_403).send(ErrorModel)
}

module.exports = {
	serverError,
	showError,
	errorData
}