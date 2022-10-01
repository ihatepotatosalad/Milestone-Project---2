const mongoose = require('mongoose')

const FavoriteSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    id: {
        type: Number,

    },




})

module.exports = mongoose.model('Favorites', FavoriteSchema)