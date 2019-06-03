const request = require('request')
const express = require('express')
const path = require('path')
const {promisify} = require('util')

let promisifiedRequest = promisify(request)

const app = express();
let token = 'pk.eyJ1Ijoicm9ndWVzZW5wYWkiLCJhIjoiY2p3OWJtMDUyMGVqdzRhbXgyM3Nuc2h6diJ9.VLULJgakf8EqKJcXpZ1Tvg'

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

// let input = process.argv[2]

app.get('/weather', async(req, res)=>{
    let location = req.query.location
    const geo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}`

    //-----------------FIRST-------------------------

    let coordinates = await promisifiedRequest({url:geo, json:true})

    let data = coordinates.body

    let long = data.features[0].geometry.coordinates[0]
    let lat = data.features[0].geometry.coordinates[1]
    const url = `https://api.darksky.net/forecast/546880b76df6113ffedb5ccd10f33c26/${lat},${long}`

//---------------------SECOND------------------------

    const weatherData = await promisifiedRequest({url:url, json: true})

    let weatherObject = weatherData.body

    res.send(weatherObject)

})

app.listen(3001,()=>{
    console.log('Listening on port 3000..')
})

// const encoded = encodeURI(geo)




 










