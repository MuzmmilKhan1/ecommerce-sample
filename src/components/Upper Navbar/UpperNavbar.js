import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './UpperNavbar.css'
import logo from '../../images/My (1).png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PersonCircle } from 'react-bootstrap-icons';

export default function UpperNavbar() {
  return (
    <>
    <Navbar bg="light" className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='brand'><img src={logo} width='75px' height='auto' className='logo'></img></Navbar.Brand>
        {/* <div className='nav'> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            {/* <Nav.Link href="#link"></Nav.Link> */}
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </div> */}
      </Container>
    </Navbar>
    </>
  )
}
