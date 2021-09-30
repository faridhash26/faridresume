import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header2 = () => {
  return (
    <Navbar bg="light" className="shadow-sm" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Farid Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={<FontAwesomeIcon color="#fff" icon={faBars} />}
              id="basic-nav-dropdown"
              className="btn btn-secondary btn-danger px-3 "
              align="end"
            >
              <NavDropdown.Item href="#home">Home</NavDropdown.Item>
              <NavDropdown.Item href="#about">About</NavDropdown.Item>
              <NavDropdown.Item href="#services">Services</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header2;
