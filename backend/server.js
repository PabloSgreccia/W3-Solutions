require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()

// Settings
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Router
const routerCountry = require('./routes/country.routes')
// Routes
app.use('/countries', routerCountry)

// Default response
app.use((req, res, next) => {
    res.status(404).json({
        status: '404',
        description: 'Page not found'
    })
})

module.exports = app