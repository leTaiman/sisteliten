import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.svg";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SISTELITEN
        </Navbar.Brand>
        <Nav className="ml-auto text-right">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
