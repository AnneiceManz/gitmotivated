import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/1.png'


function MyNavBar(props) {

  const [quotes, setQuotes] = useState([])
  
  const fecthQuotes = async (keyword) => {
    try {
      const response= await fetch(`http://localhost:8080/api/keyword/${keyword}`)
      const quotes = response.data[4]
      setQuotes(quotes)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const keyword = event.target.value
    fecthQuotes(keyword)
  }

  return (
    <>
    <Navbar bg="light" variant="light" sticky="top" className='navbar'>
      <Container>
        <Navbar.Brand href="/">
        <img
              src={Logo}
              height="180"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Nav.Link >Your Link</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;