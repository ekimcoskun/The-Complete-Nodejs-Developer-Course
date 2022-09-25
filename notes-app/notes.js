const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return `Your notes ...`
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const dublicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (dublicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = function (title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notesToKeep.length < notes.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    }else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

const saveNotes = function (note) {
    const data = JSON.stringify(note)
    fs.writeFileSync('notes.json', data)
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}