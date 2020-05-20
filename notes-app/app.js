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
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log("Removing a note")
    }
})

yargs.command({
    command:'list',
    describe: 'List all notes',
    handler: function() {
        console.log("Listign all notes")
    }
})

yargs.command({
    command:'read',
    describe: 'reading all notes',
    handler: function() {
        console.log("reading all notes")
    }
})

yargs.parse()