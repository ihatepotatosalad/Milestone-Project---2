import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import starSelect from '../Images/star.png'
import star from '../Images/starselect.png'
import axios from 'axios'
import Pokemon from "./Pokemon";

const api = axios.create({
    baseURL: `http://localhost:3000/favorites`
})
export default function Favorites() {
    const [data, setData] = useState([{}])
    const [isSelected, setIsSelected] = useState(false)
    const [imgString, setImgString] = useState('')
    useState(() => {

        api.get('/').then(res => {
            if (res.data) {
                console.log(res.data)
                setData(res.data)

            }

        })

    }, [])


    return (
        <div>
            <h1>Favorites</h1>
            {data.map((poki, i) =>

                <Card style={{ width: '18rem', border: '1px solid red' }} key={i}>

                    <Card.Body>
                        <Card.Title>{poki.name}</Card.Title>
                        <Card.Text>
                            <div>
                                {/* {import(`../Images/pokemonImg/pokemon_jpg/pokemon_jpg/${poki.id}.jpg`).default}
                                <img src={poki.imgFile} alt={poki.name} height='135' position='relative' /><br /> */}

                                Height: {poki.height}<br />
                                ID: {poki.id}<br />
                                Weight: {poki.weight}<br />
                                Type1: {poki.type1}<br />
                                Type2: {poki.type2}<br />
                            </div>
                        </Card.Text>

                    </Card.Body>
                </Card>
            )}
        </div>
    )
}