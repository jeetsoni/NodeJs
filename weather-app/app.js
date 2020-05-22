const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address) {
    console.log('Please provide the address')
} else {
    geocode(address, ({latitude, longitude, location}) => {
        console.log(location)
        forecast(latitude, longitude, (res) => {
            console.log(res);
        })
    })
}

