const https = require('https')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.3819&lon=71.9807&appid=d0fcc96c318fe0801b5e0b4e76ed55be'

const request = https.request(url, (res) => {

    let data = ''

    res.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    res.on('end', () => {
        console.log(JSON.parse(data))
    })
})

request.on('error', (error) => {
    console.log('An Error', error)
})
request.end()
