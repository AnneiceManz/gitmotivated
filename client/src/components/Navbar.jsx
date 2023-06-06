import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/1.png";

function MyNavBar(props) {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              height="180"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
