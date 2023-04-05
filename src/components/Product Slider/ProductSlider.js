import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

function ProductSlider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRight/>,
        preArrow: <ArrowLeft/>
    }
    let slides = [{
        id: 1,  
        title: "Product 1",
        price: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 2,  
        title: "Product 2",
        price: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 3,
        title: "Product 3",
        price: 24,
        discountedPrice: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 1,  
        title: "Product 1",
        price: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 2,  
        title: "Product 2",
        price: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 3,
        title: "Product 3",
        price: 24,
        discountedPrice: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 1,  
        title: "Product 1",
        price: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 2,  
        title: "Product 2",
        price: 10,
        image: "https://via.placeholder.com/900x400",
      },
      {
        id: 3,
        title: "Product 3",
        price: 24,
        discountedPrice: 10,
        image: "https://via.placeholder.com/900x400",
      }]
    return (
        <div className="justify-content-center align-items-center m-auto">
            <h2> Single Item</h2>
            <Slider {...settings} style={{overflow: 'hidden',width: "80%"}} className="m-auto justify-content-center align-items-center">
                {slides.map((slide) => (
                    <div key={slide.id} className="justify-content-center align-items-center m-auto">
                        <img src={slide.image} alt={slide.title} className="justify-content-center align-items-center m-auto"/>
                        <h3>{slide.title}</h3>
                        <p>{slide.price}</p>
                        {slide.discountedPrice && <p>{slide.discountedPrice}</p>}
                    </div>
                ))}
            </Slider>
          </div>
        );
}

export default ProductSlider;