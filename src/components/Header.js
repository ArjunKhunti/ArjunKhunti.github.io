import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import Logo from "../assets/Logo.png";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <NavDropdown title="Skills" id="basic-nav-dropdown">
              <NavDropdown.Item href="#skills/web-development">
                Web development
              </NavDropdown.Item>
              <NavDropdown.Item href="#skills/app-development">
                App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#skills/data-analytics">
                Data Analytics
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
