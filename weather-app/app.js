const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6bbfe533f30c2ec2623f61543cebcc15&query=38.423733,27.142826'

request({
    url: url,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log('It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out.')
    }
})