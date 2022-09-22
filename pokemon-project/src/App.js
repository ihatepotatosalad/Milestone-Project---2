import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Berries from './components/Berries';
import Contests from './components/Contests';
import Encounters from './components/Encounters';
import Evolution from './components/Evolution';
import Games from './components/Games';
import Items from './components/Items';
import Locations from './components/Locations';
import Machines from './components/Machines';
import Moves from './components/Moves';
import Pokemon from './components/Pokemon';
import Home from './components/Home';

function App() {

  return (
    <Router>


      <div className="navBar">
        <ul>
          <li>
            <Link to='/'>Home</Link>

          </li>
          <li>
            <Link to='/Berries'>Berries</Link>
          </li>
          <li>
            <Link to='/Contests'>Contests</Link>
          </li>
          <li>
            <Link to='/Encounters'>Encounters</Link>
          </li>
          <li>
            <Link to='/Evolution'>Evolution</Link>
          </li>
          <li>
            <Link to='/Games'>Games</Link>
          </li>
          <li>
            <Link to='/Items'>Items</Link>
          </li>
          <li>
            <Link to='/Locations'>Locations</Link>
          </li>
          <li>
            <Link to='/Machines'>Machines</Link>
          </li>
          <li>
            <Link to='/Moves'>Moves</Link>
          </li>
          <li>
            <Link to='/Pokemon'>Pokemon</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Berries' element={<Berries />} />
          <Route path='/Contests' element={<Contests />} />
          <Route path='Encounters' element={<Encounters />} />
          <Route path='/Evolution' element={<Evolution />} />
          <Route path='/Games' element={<Games />} />
          <Route path='Items' element={<Items />} />
          <Route path='/Locations' element={<Locations />} />
          <Route path='/Machines' element={<Machines />} />
          <Route path='Moves' element={<Moves />} />
          <Route path='/Pokemon' element={<Pokemon />} />

        </Routes>
      </div>
      <div>

      </div>
    </Router>


  )
}

export default App;
