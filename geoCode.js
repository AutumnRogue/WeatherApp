const request = require('request')
const {promisify} = require('util')
let promisifiedRequest = promisify(request)



place = async(location)=> {
    let token = 'pk.eyJ1Ijoicm9ndWVzZW5wYWkiLCJhIjoiY2p3OWJtMDUyMGVqdzRhbXgyM3Nuc2h6diJ9.VLULJgakf8EqKJcXpZ1Tvg'
    const place = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}`


    let coordinates = await promisifiedRequest({url:place, json:true})
    let data = coordinates.body
    let long = data.features[0].geometry.coordinates[0]
    let lat = data.features[0].geometry.coordinates[1]

    return {long,lat}
}

forecast = async(long,lat) => {
    const url = `https://api.darksky.net/forecast/546880b76df6113ffedb5ccd10f33c26/${lat},${long}?units=si`
    let weatherData= await promisifiedRequest({url:url, json:true})
    let weatherSum = weatherData.body.daily.data[0].summary.toLowerCase()
    let weatherTemp = weatherData.body.daily.data[0].temperatureHigh
    return {weatherSum,weatherTemp}
}

module.exports = {
    place,forecast
}
    
