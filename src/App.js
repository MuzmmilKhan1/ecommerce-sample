import logo from './logo.svg';
import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UpperNavbar from './components/Upper Navbar/UpperNavbar';
import LowerNavbar from './components/Lower Navbar/LowerNavbar'
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <>
    <Router>
    <UpperNavbar></UpperNavbar>
    <LowerNavbar></LowerNavbar>
      <Routes>
       <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
