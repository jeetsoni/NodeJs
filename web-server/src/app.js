const path = require('path')
const express = require('express')
const hbs = require('hbs')
console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials/')


app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Wether App',
        name: 'Jeet'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Jeet soni'
    })
}) 

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Jeet soni'
    })
})

app.get('/weather', (req, res) => {
        res.send([
        {
            forecase: '34',
            location: 'Dhandhuka'
        },
        {
            forecase: '44',
            location: 'Ahemedabad'
        }
    ])
})

app.get('/help/*', (req, res) => {
    res.render('404_notfound',{
        title: '404',
        msg: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404_notfound',{
        title: '404',
        msg: 'page not found'
})
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
