//dependacies

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
app.use(
    cors({
        origin: "http://localhost:3001",
        origin: 'https://pokemonapiproject.herokuapp.com/',
    }))

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('connected to database'))

//middleware
app.use(express.json())

const pokeInfoRouter = require('./routes/PokeInfo')
app.use('/PokeInfo', pokeInfoRouter)
const favoritesRouter = require('./routes/Favorites')
app.use('/Favorites', favoritesRouter)

app.get('/', function (req, res) {
    res.send('working')
})

app.listen(process.env.PORT, () => console.log('server Started'))