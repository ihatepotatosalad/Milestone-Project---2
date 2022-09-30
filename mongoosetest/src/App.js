
import './App.css';
import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar';
import Card from 'react-bootstrap/Card';




function App() {
  const [search, setSearch] = useState('Pikachu')
  const [BackendData, setBackendData] = useState({})
  const [dataIndex, setDataIndex] = useState([])
  const [imgNum, setImgNum] = useState(25)
  const [number, setNumber] = useState(25)
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
          }

        }

      }
    )
  }, [search])
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./Images/pokemonImg/pokemon_jpg/pokemon_jpg/${number}.jpg`)


        if (BackendData.pokedex_number != 'undefined') {


          setImgNum(response.default)

        }

      } catch (err) {
        console.log(err)
      }
    }
    fetchImage()
  }, [number])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }




  return (
    <div className="App">
      <h1>hello world</h1>
      <SearchBar handleSearch={handleSearch} />
      <Card style={{ width: '18rem', border: '1px solid red' }}>
        {/* <Card.Img style={{ border: '1px solid red' }} variant="top" src={data.sprites?.front_default} alt={data.name} /> */}
        <Card.Body>
          <Card.Title>{search}</Card.Title>

          <Card.Text>
            {(BackendData.pokedex_number === 'undefined') ? (
              <span>loading</span>
            ) : (


              <div>
                <img src={imgNum} />

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
  );
}

export default App;
