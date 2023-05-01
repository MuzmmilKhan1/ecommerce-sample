import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../CartContext/CartContext';
import Alert from 'react-bootstrap/Alert';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function DisplayProduct({ item }) {
  const [show, setShow] = useState("none");
  const location = useLocation();
  const product = location.state;
  const { addToCart } = useContext(CartContext);
  const ddToCart = (product)=>{
      addToCart(product);
      setShow("block");
  }
  if(product)
  console.log("item:"+product.imageUrl)
    return (
      <div className="d-flex justify-content-center">
      <section className="">
      <Alert variant="success" onClose={() => setShow("none")} style={{display: show}} dismissible>
      <p className='text-center'>
      Something has been added to Cart
      </p>
      </Alert>
      <div className="container px-4 px-lg-5 my-5 mx-2">
      <div className="row gx-4 gx-lg-5">
      <div className='col-md-6 d-flex justify-content-center'>
      {product && (
        <LazyLoadImage src={product.url || product.imageUrl || product.image} style={{ maxWidth: '100%', height: 'auto', maxHeight: "350px" }} alt='Product' />
              )}
              
              {/* <LazyLoadImage src={product.url || product.imageUrl || product.image} style={{ maxWidth: '100%', height: 'auto', maxHeight: "350px" }} alt='Product'/> */}
              </div>
              <div className="col-md-6">
              {product && (
                <>
                <div className="small mb-1">{product.catogery}</div>
              <h5 className="fw-bolder">{product.name || product.title}</h5>
              <div className="fs-5 mb-5">${product.price}</div>
              {product.description}
                </>
              )}
              <div className="d-flex">
              <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => ddToCart(product)}>
              <i className="bi-cart-fill me-1"></i>Add to cart
                </button>
              </div>
              </div>
          </div>
        </div>
      </section>
      </div>
      )
    // }
      
    }
