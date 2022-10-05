const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6bbfe533f30c2ec2623f61543cebcc15&query=' + latitude + ',' + longitude
    request({ url: url, json: true}, (error,response) => {
        if (error) {
            callback('Unable to connect weather services!', undefined)
        } else if (response.body.error){
            callback('Unable to find location. Try another location!', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast