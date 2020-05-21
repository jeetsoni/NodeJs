var unirest = require("unirest");


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.3819&lon=71.9807&appid=d0fcc96c318fe0801b5e0b4e76ed55be'

var req = unirest("GET", url,);
req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log('It is Currently ' + (res.body.main.temp - 273.15));
});
