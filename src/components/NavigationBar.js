import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    font-weight:bolder;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    font-weight:bolder;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">To Do List!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">To Do</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/About">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)