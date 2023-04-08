import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UpperNavbar from './components/Upper Navbar/UpperNavbar';
import LowerNavbar from './components/Lower Navbar/LowerNavbar'
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setProducts(data));
    }, []);
  return (
    <>
    <Router>
    <UpperNavbar></UpperNavbar>
    <LowerNavbar></LowerNavbar>
      <Routes>
       <Route path='/' element={<Homepage></Homepage>}></Route>
       <Route path='/products' element={<Products items={products}></Products>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;

