const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6bbfe533f30c2ec2623f61543cebcc15&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather services!', undefined)
        } else if (body.error){
            callback('Unable to find location. Try another location!', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast