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
    handler(argv) {
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
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe:'List notes',
    builder: {
        title: {
            describe: 'List Note'
        }
    },
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe:'Reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()