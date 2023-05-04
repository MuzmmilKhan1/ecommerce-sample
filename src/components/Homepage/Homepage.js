import React,  { useState, useEffect } from 'react'
import ProductSlider from '../Product Slider/ProductSlider';
import './Homepage.css'
import { ChevronDown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
  <>
    <ProductSlider></ProductSlider>
    <Products ></Products>
  </>
  )
}



function Products(){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      });
  }, []);
    return(
        <>
        <h1 className='display-4 mx-4'>Our Products -</h1>

        <div className='col-md-12 row justify-content-center align-items-center mx-auto'>
        {products.slice(0,6).map(product => (
            <div key={product.id} className='col-md-4 justify-content-center
            align-items-center mx-auto text-center'>
            <div className='col-md-11 productDiv justify-content-center
             align-items-center mx-auto text-center'>
             <Link to={'/product'} state={product} className="item-link" style={{minWidth: "100%"}}>
            <img src={product.image} alt={product.title} height={"150px"} className='mx-auto'/>
            <span className="item-info">Buy Now</span>
                </Link>
            <h6 className='text'>{product.title}</h6>
            <p className='text' style={{textDecoration: "none"}}>{product.price}</p>
          </div>
        </div>
        ))}
        <Link to='/products'
        className='LinkSeeMore d-flex flex-column justify-content-center align-items-center'>
        <p>See More</p>
        <span>
          <ChevronDown></ChevronDown>
        </span>
        </Link>
        </div>
        </>
    )
}