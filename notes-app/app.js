const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')

console.log(getNotes())
console.log(validator.isEmail('ekim@coskun.com'))
console.log(chalk.green.inverse.bold('Success!'))

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding Node!')
}else if(command ==='remove'){
    console.log('Removing Node!')
}


/*
const add = require('./utils.js')

const sum = add(5,6)

console.log(sum)
*/
/*
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file created by Node.js!')

fs.appendFileSync('notes.txt', ' - and appended')
*/