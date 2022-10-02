
import './App.css';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Favorites from './components/Favorites';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import pokeBall from './Images/pokeball.png'
function App() {





  return (

    <Router>


      <Navbar bg='light' expand="lg">
        <Container>
          <Navbar.Brand href="/" >{<img height='50' src={pokeBall} />}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/Pokemon" >Pokemon</Nav.Link>
              <Nav.Link href="/Favorites" >Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
