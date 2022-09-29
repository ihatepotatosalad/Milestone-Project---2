import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar';
import Card from 'react-bootstrap/Card';

function App() {
  const [search, setSearch] = useState('Pikachu')
  const [BackendData, setBackendData] = useState({})
  const [dataIndex, setDataIndex] = useState([])
  //
  useEffect(() => {
    fetch(`http://localhost:3000/PokeInfo/${search}`).then(
      response => response.json()
    ).then(
      data => {
        if (data) {
          setBackendData(data)
          if (BackendData) {
            console.log(BackendData)
          }

        }

      }
    )
  }, [search])
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

                Height: {BackendData.height}<br />
                ID: {BackendData.pokedex_number}<br />
                Weight: {BackendData.weight}<br />
              </div>

            )}
            {/* Types: {data.types?.map((item, i) => <li key={i}>{item?.type?.name}</li>)} */}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
