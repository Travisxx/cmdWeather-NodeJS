const request = require('request');

var getWeather = (lat,lng,callback) => {
    request({
        url:`https://api.darksky.net/forecast/f786fef14af4a541abb5a8b90701741f/${lat},${lng}`,
        json: true
      }, (error, response, body) => {
        if(error){
          callback('Unable to connect to forecast.io server.')
        }else if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
          console.log(body.currently.temperature);
        }else{
          callback('Unable to fetch weather')
        }
      } );
} ;

module.exports.getWeather = getWeather;