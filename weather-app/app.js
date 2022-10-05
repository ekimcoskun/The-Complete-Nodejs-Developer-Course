const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(38.423733, 27.142826, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
