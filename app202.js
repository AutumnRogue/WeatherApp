let token = 'pk.eyJ1Ijoicm9ndWVzZW5wYWkiLCJhIjoiY2p3OWJtMDUyMGVqdzRhbXgyM3Nuc2h6diJ9.VLULJgakf8EqKJcXpZ1Tvg'

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// let input = process.argv[2]

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/weather', async(req, res,)=>{
    let location = req.body.location
    const geo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}`

    //-----------------FIRST-------------------------

    let coordinates = await promisifiedRequest({url:geo, json:true})

    let data = coordinates.body

    let long = data.features[0].geometry.coordinates[0]
    let lat = data.features[0].geometry.coordinates[1]
    const url = `https://api.darksky.net/forecast/546880b76df6113ffedb5ccd10f33c26/${lat},${long}`


//---------------------SECOND------------------------

    const weatherData = await promisifiedRequest({url:url, json: true})

    weatherObject = weatherData.body.currently
    res.send(weatherObject)
    


})