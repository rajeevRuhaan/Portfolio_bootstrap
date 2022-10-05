import React from "react";
import companyLogo from "../images/rajeev.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      className={`shadow menu`}
      collapseOnSelect
      /*  fixed="top" */
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={companyLogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle arial-controls="respnsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end "
        >
          <Nav>
            <Nav.Link active href="/">
              Home
            </Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <button type="button" className="rounded-pill btn-rounded">
            <a href="tel:+358440378568">
              +358 440378568
              <span>
                <i className="fas fa-phone"></i>
              </span>
            </a>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
