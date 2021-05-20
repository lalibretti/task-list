import React from 'react';
<<<<<<< Updated upstream
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
=======
import {Nav, Navbar, Form, FormControl} from 'react-bootstrap';
import styled from 'styled-components';

>>>>>>> Stashed changes
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
<<<<<<< Updated upstream
  
=======
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
>>>>>>> Stashed changes
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
<<<<<<< Updated upstream
      <Navbar.Brand href="/">To Do List!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/About">Contact</Nav.Link></Nav.Item>
=======
      <Navbar.Brand href="/">Tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
>>>>>>> Stashed changes
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
<<<<<<< Updated upstream
)
=======
)
export default NavigationBar;
>>>>>>> Stashed changes
