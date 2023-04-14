import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductSlider.css'
import {ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function ProductSlider(){
  const ArrowLeft1 = ({ currentSlide, slideCount, ...props }) => (
        <ChevronLeft
            {...props}
            className={
              " prev" +
      (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
            ></ChevronLeft>
    );
    const ArrowRight1 = ({ currentSlide, slideCount, ...props }) => (
        <ChevronRight
            {...props}
            className={
              " next" +
      (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
            ></ChevronRight>
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <ArrowRight1></ArrowRight1>,
        prevArrow: <ArrowLeft1></ArrowLeft1>,
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            initalSlide: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow: <ArrowRight1></ArrowRight1>,
            prevArrow: <ArrowLeft1></ArrowLeft1>,
          }
        }
        ]
    }
    let slides = [{
        id: 1,  
        title: "Product 1",
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 2,  
        title: "Product 2",
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "https://images.unsplash.com/photo-1491926626787-62db157af940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 3,
        title: "Product 3",
        price: 24,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        discountedPrice: 10,
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 4,  
        title: "Product 1",
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 5,  
        title: "Product 2",
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      },
      {
        id: 6,
        title: "Product 3",
        price: 24,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        discountedPrice: 10,
        image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      }]
    return (
        <div>
          <h1 className="display-4 mx-4">On Sale - </h1>
            <Slider {...settings}  className="slider m-auto my-3">
                {slides.map((slide) => (
                    <div key={slide.id} className="m-auto text-center">
                    <Link to={{ pathname: `/product`}} state={slide} className="item-link">
                      <img src={slide.image} alt={slide.title} className="m-auto productSliderImage"/>
                      <span className="item-info">{slide.title}</span>
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
        );
}

export default ProductSlider;