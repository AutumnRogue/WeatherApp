const {promisify} = require('util')
let promisifiedRequest = promisify(request)

const geoCode = require('./geoCode')

coords = () => {
    let data = geoCode.body


    


    const weatherData = await promisifiedRequest({url:url, json: true})
    return weatherData
}

module.exports = coords