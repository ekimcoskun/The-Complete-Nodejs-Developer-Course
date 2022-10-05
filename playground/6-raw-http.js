const http = require('http')
const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=1fdc8277639ad86bff356b8ccfe60844&query=45,-75'

const request = http.request(geocodeURL, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request('error', (error) => {
    console.log('An error', error)
})

request.end()