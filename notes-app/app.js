const notes = require('./notes.js')
const validator = require('validator')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe:'Adding note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe:'Removing note',
    builder: {
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe:'List notes',
    handler: function() {
        console.log('Listing the notes')
    }
})

yargs.command({
    command: 'read',
    describe:'Reading note',
    handler: function() {
        console.log('Reading the notes')
    }
})

yargs.parse()