
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express();
const api = require('./geoCode')

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.render('index')
})


app.post('/weather', async(req, res,)=>{
    let location = req.body.location
    let coordinates = await api.place(location)
    let weatherInfo = await api.forecast(coordinates.long,coordinates.lat)

    res.send(`Today the weather in ${location} will be ${weatherInfo.weatherSum} The temp-high will be ${weatherInfo.weatherTemp} celsius.`)
})
app.listen(3001,()=>{
    console.log('Listening on port 3001..')
})






 










