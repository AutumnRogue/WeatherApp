let form = document.getElementById('form')
let input = document.getElementById('locationInput')

let getWeather = () => {
    event.preventDefault()
    let location = input.value
    fetch(`http://localhost:3001/weather?location=${location}`).then((response) =>{
    response.json().then((data)=>{
        console.log(data)
    })
})
}

form.onsubmit = getWeather;
