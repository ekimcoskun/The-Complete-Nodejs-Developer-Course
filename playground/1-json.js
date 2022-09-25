const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
let dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Ali Bal"
data.age = 30

dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)

/*
const book = {
    title: 'Animal Farm',
    author:'George Orwell'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
*/