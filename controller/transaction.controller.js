'use strict'

const Constant = require('../util/constant')
const Validate = require('../util/validate')
const Data = require('../json/transaction.json')
var ErrorContract = require('../contract/error.contract')

function pay(request, response) {
    const params = request.body

    if(!params.clientId) {
        ErrorContract.showError(response, "200", Constant.CLIENT_ID_IS_REQUIRED)
    }

    if(!params.amount) {
        ErrorContract.showError(response, "201", Constant.AMOUNT_IS_REQUIRED)
    }

    if (Validate.validate(request)) {
        response.status(Constant.CODE_200).send(Data)
    } else {
        ErrorContract.errorData(response)
    }
	
}

module.exports = {
	pay
}