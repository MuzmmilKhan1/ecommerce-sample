import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UpperNavbar from './components/Upper Navbar/UpperNavbar';
import LowerNavbar from './components/Lower Navbar/LowerNavbar'
import ProductSlider from './components/Product Slider/ProductSlider';

function App() {
  return (
    <>
    <UpperNavbar></UpperNavbar>
    <LowerNavbar></LowerNavbar>
    <ProductSlider></ProductSlider>
    </>
  );
}

export default App;
