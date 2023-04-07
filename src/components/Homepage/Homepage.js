import React,  { useState, useEffect } from 'react'
import ProductSlider from '../Product Slider/ProductSlider';

export default function Homepage() {
  return (
  <>
    <ProductSlider></ProductSlider>
    <Products></Products>
  </>
  )
}



function Products(){
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setProducts(data));
    }, []);
    return(
        <>
        <h1 className='display-4 mx-4'>Our Products -</h1>
        <div className='col-md-12 row justify-content-center align-items-center'>

        {products.map(product => (
            <div key={product.id} className='col-md-4 justify-content-center align-items-center mx-auto text-center'>
            <img src={product.image} alt={product.title} height={"150px"} className='mx-auto'/>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
        </div>
        </>
    )
}