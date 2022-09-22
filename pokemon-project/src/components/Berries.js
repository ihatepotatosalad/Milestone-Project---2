import { React, useEffect, useState } from "react"
export default function Berries() {
    let [search, setSearch] = useState('pikachu')
    let [message, setMessage] = useState('')
    let [data, setData] = useState({})

    useEffect(() => {
        if (search) {
            const fetchData = async () => {
                document.title = `${search} `
                const response = await fetch(`https://pokeapi.co/api/v2/berry/`)
                const resData = await response.json()
                if (resData) {
                    setData(resData)
                } else {
                    setMessage('not found')
                }
            }
            fetchData()

        }

    }, [search])

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    console.log(data)

    return (
        <>

            <div>
                {data.results?.map(item => <li>{item?.name} Berry</li>)}

            </div>

        </>
    )
}