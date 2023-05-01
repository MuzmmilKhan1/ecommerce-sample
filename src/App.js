import React,{useState,useEffect} from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UpperNavbar from './components/Upper Navbar/UpperNavbar';
import LowerNavbar from './components/Lower Navbar/LowerNavbar'
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import DisplayProduct from './components/displayingProducts/DisplayProduct';
import Cart from './components/Cart/Cart';
import { CartProvider } from './CartContext/CartProvider';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from "./components/Login/Login"
import Forgot from './components/Login/Forgot';
import Register from './components/Register/Register';
import { dataArray } from './components/Firebase';

function App() {

  const [products, setProducts] = useState();
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Setting Products
    setProducts(dataArray);
    }, []);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
    <Router>
    <ScrollToTop/>  
    <UpperNavbar></UpperNavbar>
    <LowerNavbar></LowerNavbar>
    <CartProvider>
      <Routes>
       <Route path='/' element={<Homepage></Homepage>}></Route>
       <Route path='/products' element={<Products items={products}></Products>}></Route>
       <Route path="/product" element={<DisplayProduct item />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/login" element={<Login />} />
       <Route path="/resetPassword" element={<Forgot />} />
       <Route path="/register" element={<Register />} />
      </Routes>
    </CartProvider>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;

