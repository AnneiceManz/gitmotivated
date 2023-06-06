import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/1.png'


function MyNavBar(props) {

  const [quotes, setQuotes] = useState([])
  
  const fecthQuotes = async (keyword) => {
    try {
      const response= await axios.get(`http://localhost:8080/api/keyword/${keyword}`)
      const quotes = response.data[4]
      setQuotes(quotes)
    } catch (error) {
      console.log(error)
    }
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
            <h3>Search by Category</h3>
           <select>
            <option value="success">Success</option>
            <option value="confindence">Confidence</option>
            <option value="future">Future</option>
            <option value="inspiration">Inspiration</option>
            <option value="anxiety">Anxiety</option>
            <option value="kindness">Kindness</option>
            <option value="work">Work</option>
            <option value="today">Today</option>
            <option value="excellence">Excellence</option>
            <option value="dreams">Dreams</option>
           </select>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;