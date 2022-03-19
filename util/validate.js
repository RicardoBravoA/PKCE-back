'use strict'

function validate(request) {
    const verb = request.method.toLowerCase()
    const body = JSON.stringify(request.body).replace(/"/g, "")

    var data = request.originalUrl + verb + body
    console.log(data)

    let buff = new Buffer.from(data)
    let base64data = buff.toString('base64')
    console.log(base64data)

    let buffDecode = new Buffer.from(base64data, 'base64')
    let text = buffDecode.toString('ascii')
    console.log(text)

    const requestId = request.headers['request-id']
    console.log(requestId)

    return base64data == requestId
}

module.exports = {
	validate
}