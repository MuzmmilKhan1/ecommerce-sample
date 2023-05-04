import React, { useState, useEffect, useRef } from 'react';
import './LowerNavbar.css'
import { Navbar, Nav, FormControl } from 'react-bootstrap';
import { PersonCircle, CartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Google } from 'react-bootstrap-icons';
import { signInWithGoogle } from '../Firebase';
import uploadProduct from '../Product-Upload/productUpload'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import 'firebase/storage';
import { InfinitySpin } from 'react-loader-spinner';
import Alert from 'react-bootstrap/Alert';
import { dataArray } from '../Firebase';
import { useLocation } from 'react-router-dom';
import Compressor from 'compressorjs';



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
  const [display, setDisplay] = useState("none")
  const [search, setSearch] = useState('')
  const [array, setArray] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productDisplay, setProductDisplay] = useState("none")
  const divRef = useRef(null);
  const inputRef = useRef(null);


  const location = useLocation();

  useEffect(() => {
    setProductDisplay("none")
  }, [location]);



  useEffect(() => {
    setArray(dataArray);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target) &&
        inputRef.current && !inputRef.current.contains(event.target)) {
        // Clicked outside the div and input
        setProductDisplay("none");
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = (input) => {
    const filtered = array.filter((product) => {
      if (product.name)
        return product.name.toLowerCase().includes(input.toLowerCase());
      else
        return false;
    });
    setFilteredProducts(filtered);
  };



  // Image Upload
  const handleUpload = async (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      storageRef = ref(storage1, `productImages/${file.name}`)
      new Compressor(file, {
        quality: 0.6, // set the desired quality
        convertSize: 1000,
        success: (compressedFile) => {
          uploadBytes(storageRef, compressedFile).then((snapshot) => {
            // Get the download URL
            getDownloadURL(storageRef)
              .then((url) => {
                uploadProduct(name, description, price, url); // call uploadProduct() after setting imageUrl
                setDisplay("none");
              })
              .catch((error) => {
                console.log('Error getting download URL:', error);
              });
          })
            .catch((error) => {
              console.log('Error uploading file:', error);
            });
        }
      })
    };
  }

  // Uploading Product
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDisplay("flex")
    await handleUpload(image);
  };


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
        <Alert key="light" variant="light" className="justify-content-center align-items-center" style={{ display: display, flexDirection: "column", textAlign: "center" }}>
          <InfinitySpin
            width='200'
            color="#4fa94d"
          />
          <p>Please wait while your product is being uploaded (Until Automatic Reload).</p>
        </Alert>
        <Modal.Body className='model'>

          {/* AddProduct form */}
          <form onSubmit={handleFormSubmit}>
            {/* Product name input */}
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text" className="form-control" id="productName" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            {/* Product description input */}
            <div className="form-group">
              <label htmlFor="productDescription">Product Description</label>
              <textarea className="form-control" id="productDescription" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            {/* Product image input */}
            <div className="form-group">
              <label htmlFor="productImage">Product Image</label>
              <input type="file" className="form-control-file" onChange={(e) => { setImage(e); }} id="productImage" />
            </div>
            {/* Product price input */}
            <div className="form-group">
              <label htmlFor="productPrice">Product Price</label>
              <input type="number" className="form-control" id="productPrice" value={price} onChange={(e) => setPrice(e.target.value)} />
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
        <div className='d-flex flex-column w-50'>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value);
              setProductDisplay("block")
            }}
            ref={inputRef}
          // onBlur={()=>setProductDisplay("none")}
          />
          <div className='product-list w-50' style={{ display: productDisplay }} onClick={() => setProductDisplay("block")}
            onFocus={() => setProductDisplay("block")}
            onBlur={() => setProductDisplay("none")}
            ref={divRef}
          >
            {filteredProducts.map((product, index) => {
              return (
                <Link
                  key={index}
                  to={{ pathname: '/product' }} state={product}
                  className='liSearchProducts'
                >
                  <img src={product.imageUrl} alt={product.name} style={{ width: "40px", height: "40px" }} />
                  {product.name}
                </Link>
              );
            })}
          </div>
        </div>
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
