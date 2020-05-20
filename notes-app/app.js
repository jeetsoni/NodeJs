const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title you want to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'read',
    describe: 'reading all notes',
    builder: {
        title: {
            describe: 'Read Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})



yargs.parse()