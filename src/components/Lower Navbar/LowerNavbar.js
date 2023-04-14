import React, { useState } from 'react';
import './LowerNavbar.css'
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
import { PersonCircle, CartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Google } from 'react-bootstrap-icons';

function LowerNavbar() {
  const [isAddProductVisible, setAddProductVisible] = useState(false);

  const handleAddProductClick = () => {
    setAddProductVisible(!isAddProductVisible);
  };

  const handleCloseModal = () => {
    setAddProductVisible(false);
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className='justify-content-center'>
        <Navbar.Brand href="#"> </Navbar.Brand>
        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50" />
        <Button variant="outline-dark" style={{ margin: "10px" }}>Search</Button>
        <Nav className="mr-auto align-items-center justify-content-center"
          style={{ padding: "10px", display: "flex", flexDirection: "row" }}>
          <button className="btn slide" style={{ padding: "10px" }}>
            <span className="text">Add a Product</span>
          </button>
          <Nav.Link>
            <Link to={'/cart'} className='nav-link'>
              <CartFill style={{ fontSize: "1.5rem", margin: "5px" }}></CartFill>
            </Link>
          </Nav.Link>
          <Nav.Link onClick={handleAddProductClick}>
            <PersonCircle style={{ fontSize: "1.5rem", margin: "5px" }} ></PersonCircle>
          </Nav.Link>
        </Nav>
      </Navbar>
      {isAddProductVisible && (
        // Render the element that becomes visible on click
        <div>
          <Modal show={isAddProductVisible} onHide={handleCloseModal} className='model'>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className='model'>
              <Link className="login_button">Login via Email</Link>
                <div class="text-wrapper">
                  <hr></hr>
                  <span class="text">OR</span>
                  <hr></hr>
                </div>
              <Link className="login_button"><Google className='m-2'></Google>Login Via Gmail</Link>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export default LowerNavbar;