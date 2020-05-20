const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
     const notes = loadNotes();
     const notesToKeep = notes.filter((note) => note.title !== title)

     if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
     }   
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find((note) => note.title === title )

    if(selectedNote) {
        console.log(chalk.inverse(selectedNote.title))
        console.log(selectedNote.body)
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
    }

   
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const data = JSON.parse(fs.readFileSync('notes.json'))
        return data
    } catch (e) {
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}