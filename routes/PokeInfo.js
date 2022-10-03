const express = require('express')
const pokemon = require('../models/pokemon')
const router = express.Router()
const Pokemon = require('../models/pokemon')
//get all
router.get('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.find()
        res.json(pokemon)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//get one
router.get('/:id', getPokemon, async (req, res) => {

    res.json(res.pokemon)

})
//create

router.post('/', async (req, res) => {
    const pokemon = new Pokemon({
        name: req.body.name,
        id: req.body.id

    })
    try {
        const newPokemon = await pokemon.save()
        res.status(201).json(newPokemon)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//update

router.patch('/', getPokemon, async (req, res) => {
    if (req.body.name != null) {
        res.pokemon.name = req.body.name
    }
    if (req.body.id != null) {
        res.pokemon.name = req.body.id
    }
    try {
        const updatedPokemon = await res.pokemon.save()
        res.json(updatedPokemon)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})
//delete
router.delete('/:id', getPokemon, async (req, res) => {
    try {
        await res.pokemon.remove()
        res.json({ message: 'delete sucess' })
    } catch {
        res.status(500).json({ message: err.message })
    }
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