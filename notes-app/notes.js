const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.red.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const dublicateNote = notes.find((note) => note.title === title)

    if (!dublicateNote) {
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

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title )

    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.green(note.body))
    }else {
        console.log(chalk.red.inverse('No note found'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title) 

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

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}