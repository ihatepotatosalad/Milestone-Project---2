
const mongoose = require('mongoose')

const FavoriteSchema = new mongoose.Schema({
    name: {
        type: String

    },
    id: {
        type: Number

    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    type1: {
        type: String
    },
    type2: {
        type: String
    }




})

module.exports = mongoose.model('Favorites', FavoriteSchema)