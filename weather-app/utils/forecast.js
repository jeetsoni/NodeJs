var unirest = require("unirest");

const forecast = (lat, long , callback) => {
    unirest.get('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ long +'&appid=d0fcc96c318fe0801b5e0b4e76ed55be')
    .then((res) => {
        if (res.error) callback(error)
        callback('It is Currently ' + (res.body.main.temp - 273.15))
    }) 
}

module.exports = forecast
