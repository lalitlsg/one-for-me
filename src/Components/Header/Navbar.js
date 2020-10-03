import React from "react";
import { Navbar, Nav, Row, Col, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../../App.css";
import ofm from "../../Images/ofm.svg";

const NavbarComponent = () => {
  return (
    <>
      <Row>
        <Col md={10} className="mx-auto">
          <Navbar expand="sm" variant="light">
            <Navbar.Brand>
              <LinkContainer to="/">
                <img src={ofm} alt="ofm" className="logo-ofm" />
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto nav-div">
                <LinkContainer to="/" activeClassName="link-active" exact>
                  <NavItem className="link">Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/blogs" activeClassName="link-active">
                  <NavItem className="link">Blogs</NavItem>
                </LinkContainer>
                <LinkContainer to="/videos" activeClassName="link-active">
                  <NavItem className="link">Videos</NavItem>
                </LinkContainer>
                <LinkContainer to="/about" activeClassName="link-active">
                  <NavItem className="link">About</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default NavbarComponent;
