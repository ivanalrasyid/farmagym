import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/styles/Navigation.css";

import Logo from "../assets/images/logo.png";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container className="d-flex justify-content- align-items-center">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo Brand" className="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ms-5 NavLink">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
          </Nav>
          <button className="ContactUs">Contact Us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
