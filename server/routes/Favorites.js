const express = require('express')
const Favorites = require('../models/FavoritesModel')
const router = express.Router()

//get all
router.get('/', async (req, res) => {

    try {
        const favorites = await Favorites.find()
        res.json(favorites)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//get one
router.get('/:id', getPokemon, async (req, res) => {



})
//create

router.post('/', async (req, res) => {
    const favorite = new Favorites({
        name: req.body.name,
        id: req.body.id,
        weight: req.body.weight,
        height: req.body.height,
        type1: req.body.type1,
        type2: req.body.type2,
        imgFile: req.body.imgFile
    })
    try {
        const newFavorite = await favorite.save()
        res.status(201).json(newFavorite)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//update

router.patch('/', getPokemon, async (req, res) => {


})
//delete
router.delete('/:id', getPokemon, async (req, res) => {

})
async function getPokemon(req, res, next) {
    let pokemon
    try {
        pokemon = await Pokemon.findOne({ name: req.params.id })
        if (pokemon == null) {
            return res.status(404).json({ message: 'cant find' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.pokemon = pokemon
    next()
}

module.exports = router