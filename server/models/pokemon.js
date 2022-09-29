const mongoose = require('mongoose')

const PokeSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    id: {
        type: Number,

    },




})

module.exports = mongoose.model('Pokemon', PokeSchema)