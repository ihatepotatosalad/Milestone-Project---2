//dependacies
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
app.use(
    cors({
        origin: "http://localhost:3001"
    }))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('connected to database'))

//middleware
app.use(express.json())

const pokeInfoRouter = require('./routes/PokeInfo')
app.use('/PokeInfo', pokeInfoRouter)

app.listen(3000, () => console.log('server Started'))