import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Pages/Home'
import SingleProduct from './Pages/SingleProduct'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import ErrorPage from './Pages/ErrorPage';
import Header from './Components/Header/Header'
import Footer from './Pages/Footer';
import ProductData from './Data/ProductData';
import axios from "axios";
import {CartState} from "../src/context/context"
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Records from  './Records.json'



function App() {
  const {state:{products}} = CartState();

  return (
    
  <BrowserRouter>
 
  <Header/>

      
   
  <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/products' element={<Products productItems={products}/>}/>
 
 <Route path='/SP' element={<SingleProduct products={products}/>}/>
 <Route path='/cart' element={<Cart/>}/>
 <Route path='*' element={<ErrorPage/>}/>

  </Routes>

<Footer/>

  </BrowserRouter>
 
     );
}

export default App;
