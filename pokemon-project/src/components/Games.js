import { React, useEffect, useState } from "react"
import SearchBar from "./SearchBar";
export default function Games() {
    let [search, setSearch] = useState('games')
    let [message, setMessage] = useState('')
    let [data, setData] = useState({})

    useEffect(() => {
        if (search) {
            const fetchData = async () => {
                document.title = `${search} `
                const response = await fetch(`https://pokeapi.co/api/v2/version/`)
                const resData = await response.json()
                if (resData) {
                    setData(resData)
                } else {
                    setMessage('not found')
                }
            }
            fetchData()

        }
        console.log(data)
    }, [search])

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    console.log(data)
    return (
        <div>
            <h1>Pokemon Games</h1>
            {data.results?.map(item => <li>Pokemon {item?.name}</li>)}




        </div>
    )
}