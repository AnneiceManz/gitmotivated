import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/1.png'


function MyNavBar(props) {

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
            Signed in as: <a href="#login">Cristina Rodriguez</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;