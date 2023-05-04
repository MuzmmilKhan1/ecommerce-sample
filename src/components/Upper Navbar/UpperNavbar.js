import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './UpperNavbar.css'
import logo from '../../images/My (1).png';
import { LinkContainer } from 'react-router-bootstrap'

export default function UpperNavbar() {
  return (
    <>
      <Navbar bg="light" className='navbar' expand="lg">
        <Container>
          <Navbar.Brand href="/" className='brand'><img src={logo} width='75px' height='auto' className='logo' alt='Logo'></img></Navbar.Brand>
          {/* <div className='nav'> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav justify-content-end">
              <LinkContainer to={'/'}>
                <Nav.Link >
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/products'}>
                <Nav.Link href="#link">Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/about'}>
                <Nav.Link href="#link">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/about'}>
                <Nav.Link href="#link">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
