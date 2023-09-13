import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; // Create a separate CSS file for the navbar if needed

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary navbar" sticky="top">
    <Container>
      <Navbar.Brand href="/">Mosman FC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navbar-container">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#results">Results</Nav.Link>
          <Nav.Link href="/ladder">Ladder</Nav.Link>
          <Nav.Link href="/createPlayer">Create Player</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
