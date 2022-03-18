'use strict'

const Constant = require('../util/constant')
const data = require('../json/movie.json');

function list(request, response) {
	response.status(Constant.CODE_200).send({
        data
    })
}

module.exports = {
	list
}