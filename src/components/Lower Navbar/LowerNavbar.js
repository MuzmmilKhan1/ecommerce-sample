import React from 'react';
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
import { PersonCircle, CartFill } from 'react-bootstrap-icons';

function LowerNavbar() {
  return (
    <Navbar bg="light" expand="lg" className='justify-content-center'>
      <Navbar.Brand href="#">   </Navbar.Brand>
        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50" />
        <Button variant="outline-dark" style={{margin: "10px"}}>Search</Button>
        <Nav className="mr-auto align-items-center justify-content-center" 
        style={{padding: "10px",display: "flex",flexDirection: "row"}}>
        <button className="btn slide" style={{padding: "10px"}}>
            <span className="text">Add a Product</span>
        </button>
        <Nav.Link>
            <CartFill style={{fontSize: "1.5rem",margin: "5px"}}></CartFill>
        </Nav.Link>
        <Nav.Link>
            <PersonCircle style={{fontSize: "1.5rem",margin: "5px"}}></PersonCircle>
        </Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default LowerNavbar;