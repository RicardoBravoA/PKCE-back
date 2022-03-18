'use strict'

const Constant = require('../util/constant')
const Validate = require('../util/validate')
const Data = require('../json/movie.json')

function list(request, response) {
    
    console.log(Validate.validate(request))

	response.status(Constant.CODE_200).send({
        Data
    })
}

module.exports = {
	list
}