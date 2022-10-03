
const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    id: {
        type: Number,

    },




})

module.exports = mongoose.model('Pokemon', pokemonSchema)