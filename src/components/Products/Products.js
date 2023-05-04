
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ColorRing } from 'react-loader-spinner';

export default function Products({ items }) {
  const [products, setProducts] = useState(items || []);
  const [display, setDisplay] = useState("none")
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Checking If Products is empty
    if (products.length === 0) {
      setDisplay("flex");
      // eslint-disable-next-line
      // Running to check if Items is defined untill now
      const timeout = setTimeout(() => {
        if (items) {
          setProducts(items);
          setDisplay("none")
        }
        setCount(count + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [count]);


  return (
    <>
      <h1 className='display-4 mx-4'>Our Products -</h1>
      <div className='col-md-12 row justify-content-center align-items-center mx-auto'>

        {products.map(product => (
          <div key={product.imageUrl || product.id} className='col-md-4 justify-content-center
            align-items-center mx-auto text-center'>

            <div key={product.imageUrl} className='col-md-11 productDiv justify-content-center
             align-items-center mx-auto text-center'>
              <Link to={{ pathname: `/product` }} state={product} className="item-link" style={{ minWidth: "100%" }}>
                <LazyLoadImage src={product.image || product.imageUrl} alt={product.title || product.name} height={"150px"} className='mx-auto' />
                <span className="item-info">Buy Now</span>
              </Link>
              <h6 className='text'>{product.name}</h6>
              <p className='text' style={{ textDecoration: "none" }}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: display, flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#50C878', '#50C878', '#50C878', '#50C878', '#50C878']}
        />
        Loading Products...</div>
    </>
  )
}