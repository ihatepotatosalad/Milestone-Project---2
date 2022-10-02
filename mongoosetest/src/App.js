
import './App.css';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Favorites from './components/Favorites';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
function App() {





  return (
    <Router>
      <div className='navBar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>

          </li>
          <li>
            <Link to='/Favorites'>Favorites</Link>
          </li>
          <li>
            <Link to='/Pokemon'>Pokemon</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/Pokemon' element={<Pokemon />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
