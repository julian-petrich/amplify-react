import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; // Create a separate CSS file for the navbar if needed

//TODO: https://react-bootstrap.netlify.app/docs/components/offcanvas

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary navbar" sticky="top">
    <Container>
      <Navbar.Brand href="/">Mosman FC</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto navbar-container">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/player">Player</Nav.Link>
          <Nav.Link href="/results">Results</Nav.Link>
          <Nav.Link href="/ladder">Ladder</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
