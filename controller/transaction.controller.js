'use strict'

const Constant = require('../util/constant')
const Validate = require('../util/validate')
const Data = require('../json/transaction.json')
var ErrorContract = require('../contract/error.contract')

function pay(request, response) {
    if (Validate.validate(request)) {
        response.status(Constant.CODE_200).send({
            Data
        })
    } else {
        ErrorContract.errorData(response)
    }
	
}

module.exports = {
	pay
}