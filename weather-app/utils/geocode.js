const request = require('request')

const geocode = (adress, callback) => {
    const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=1fdc8277639ad86bff356b8ccfe60844&query=' + encodeURIComponent(adress)

    request({
        url: geocodeURL,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.data.length === 0) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label
            })
        }
    })
}

module.exports = geocode