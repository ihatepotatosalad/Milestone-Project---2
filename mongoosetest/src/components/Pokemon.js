import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import Card from 'react-bootstrap/Card';
import starSelect from '../Images/star.png'
import star from '../Images/starselect.png'
import axios from 'axios'


const api = axios.create({
    baseURL: `http://localhost:3000/favorites`
})
export default function Pokemon() {
    const [search, setSearch] = useState('Pikachu')
    const [BackendData, setBackendData] = useState({})
    const [imgNum, setImgNum] = useState(25)
    const [number, setNumber] = useState(25)
    const [isSelected, setIsSelected] = useState(false)
    //
    useEffect(() => {
        fetch(`http://localhost:3000/PokeInfo/${search}`).then(
            response => response.json()
        ).then(
            data => {
                if (data) {
                    setBackendData(data)

                    if (BackendData.pokedex_number) {
                        console.log(data.pokedex_number)
                        setNumber(data.pokedex_number)
                        setIsSelected(false)
                    }

                }

            }
        )
    }, [search])
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../Images/pokemonImg/pokemon_jpg/pokemon_jpg/${number}.jpg`)


                if (BackendData.pokedex_number != 'undefined') {


                    setImgNum(response.default)

                }

            } catch (err) {
                console.log(err)
            }
        }
        fetchImage()
    }, [number])
    let addToFavorites = async () => {
        let res = await api.post('/', { name: BackendData.name, id: BackendData.pokedex_number, weight: BackendData.weight_kg, height: BackendData.height_m, type1: BackendData.type1, type2: BackendData.type2 ? BackendData.type2 : 'None', imgFile: `../Images/pokemonImg/pokemon_jpg/pokemon_jpg/${number}.jpg` })
        console.log('res')

    }
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }
    const handlePost = () => {
        if (!isSelected) {
            setIsSelected(true)

            addToFavorites()
        } else if (isSelected) {
            setIsSelected(false)
        }

    }
    return (
        <div className="App">
            <h1>Pokemon</h1>
            <SearchBar handleSearch={handleSearch} />
            <Card style={{ width: '18rem', border: '1px solid red' }}>
                {isSelected ? <img src={star} height="50" width='50' onClick={handlePost} /> : <img src={starSelect} height="50" width='50' onClick={handlePost} />}
                <Card.Body>
                    <Card.Title>{search}</Card.Title>

                    <Card.Text>
                        {(BackendData.pokedex_number === 'undefined') ? (
                            <span>loading</span>
                        ) : (


                            <div>
                                <img src={imgNum} height='135' position='relative' /><br />

                                Height: {BackendData.height_m}<br />
                                ID: {BackendData.pokedex_number}<br />
                                Weight: {BackendData.weight_kg}<br />
                                Type1: {BackendData.type1}<br />
                                Type2: {BackendData.type2 ? BackendData.type2 : 'None'}<br />
                            </div>

                        )}

                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}