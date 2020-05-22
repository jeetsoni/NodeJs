const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address) {
    console.log('Please provide the address')
} else {
    geocode(address, (data) => {
        console.log(data.location)
        forecast(data.latitude, data.longitude, (res) => {
            console.log(res);
        })
    })
}

