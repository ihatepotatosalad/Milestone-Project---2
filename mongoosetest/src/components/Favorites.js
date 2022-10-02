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
            {data.map((poki) =>
                <Card style={{ width: '18rem', border: '1px solid red' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{poki.name}</Card.Title>
                        <Card.Text>
                            <div>
                                {/* <img src={imgNum} height='135' position='relative' /><br /> */}

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