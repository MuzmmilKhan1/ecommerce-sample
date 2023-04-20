import React, { useState } from 'react';
import './LowerNavbar.css'
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
import { PersonCircle, CartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Google } from 'react-bootstrap-icons';
import { signInWithGoogle } from '../Firebase';
import uploadProduct from '../Product-Upload/productUpload'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import 'firebase/storage';

function LowerNavbar() {
  const [isLoginVisible, setLoginVisible] = useState(false); 
  const [isAddProductVisible, setAddProductVisible] = useState(false);
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage1 = getStorage();
  // Create a storage reference from our storage service
  let storageRef;



// State for products
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState('');
  
// Handling Image Change
const handleUpload = (event) => {
  if (event.target.files && event.target.files.length > 0) { 
  setImage(event.target.files[0].name);
    storageRef = ref(storage1, `productImages/${image}`)
    const file = event.target.files[0];
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      // Get the download URL
      getDownloadURL(storageRef)
        .then((url) => {
          console.log(url);
          setImageUrl(url);
        })

    });
}
};

  // Uploading Product
  // Function to handle form submit
  const handleFormSubmit = async (e) => {
    console.log(e)
    handleUpload(image)
    // e.preventDefault();
    // try {
    //   // eslint-disable-next-line
    //   const downloadURL = await uploadProduct(name, description, price, imageUrl);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  // Login Modal
  const handleLoginClick = () => {
    setLoginVisible(!isLoginVisible); 
  };

  const handleCloseModal = () => {
    setLoginVisible(false); 
  }

  // Product Modal
  const handleAddProductClick = () => {
    setAddProductVisible(!isAddProductVisible);
  };

  const handleCloseModalProduct = () => {
    setAddProductVisible(false);
  }

  // Product modal
  const ProductModal = () => {
    return (
      <Modal show={isAddProductVisible} onHide={handleCloseModalProduct} className='model'>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className='model'>
          {/* AddProduct form */}
          <form onSubmit={handleFormSubmit}>
            {/* Product name input */}
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text" className="form-control" id="productName" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            {/* Product description input */}
            <div className="form-group">
              <label htmlFor="productDescription">Product Description</label>
              <textarea className="form-control" id="productDescription" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            {/* Product image input */}
            <div className="form-group">
              <label htmlFor="productImage">Product Image</label>
              <input type="file" className="form-control-file" onChange={(e)=>{setImage(e)}} id="productImage" />
            </div>
            {/* Product price input */}
            <div className="form-group">
              <label htmlFor="productPrice">Product Price</label>
              <input type="number" className="form-control" id="productPrice" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary">Add Product</button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }


  
  // Login Modal
  const renderModal = () => {
    return (
      <Modal show={isLoginVisible} onHide={handleCloseModal} className='model'>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='model'>
          <Link to='/login' className="login_button" onClick={handleCloseModal}>Login via Email</Link>
          <div className="text-wrapper">
            <hr></hr>
            <span className="text">OR</span>
            <hr></hr>
          </div>
          <Link className="login_button" onClick={signInWithGoogle}><Google className='m-2'></Google>Login Via Gmail</Link>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className='justify-content-center'>
        <Navbar.Brand> </Navbar.Brand>
        <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50" />
        <Button variant="outline-dark" style={{ margin: "10px" }}>Search</Button>
        <Nav className="mr-auto align-items-center justify-content-center"
          style={{ padding: "10px", display: "flex", flexDirection: "row" }}>
          <button className="btn slide" style={{ padding: "10px" }} onClick={handleAddProductClick}>
            <span className="text">Add a Product</span>
          </button>
            <Link to="/cart" >
              <CartFill style={{ fontSize: "1.5rem", margin: "5px", color: "GrayText" }}></CartFill>
            </Link>
          <Nav.Link onClick={handleLoginClick}> 
            <PersonCircle style={{ fontSize: "1.5rem", margin: "5px" }} ></PersonCircle>
          </Nav.Link>
        </Nav>
      </Navbar>
      {isLoginVisible && renderModal()} 
      {isAddProductVisible && ProductModal()} 
    </>
  );
}

export default LowerNavbar;
