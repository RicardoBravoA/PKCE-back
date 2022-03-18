'use strict'

function validate(request) {
    const verb = request.method.toLowerCase()
    const body = JSON.stringify(request.body)

    var data = request.originalUrl + verb + body

    let buff = new Buffer.from(data)
    let base64data = buff.toString('base64')

    let buffDecode = new Buffer.from(base64data, 'base64')
    let text = buffDecode.toString('ascii')

    const requestId = request.headers['request-id']

    return base64data == requestId
}

module.exports = {
	validate
}