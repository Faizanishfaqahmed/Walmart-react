import React, {useState} from 'react'
import ProductCard from './ProductCard'
import products from '../herosubcomponents/products.json'
import scrollbarHide from 'tailwind-scrollbar-hide'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';





const Sliders = () => {
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1600, min: 1280 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1279, min: 1224 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1124, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 1000, min: 450 },
      items: 2
    },
    small: {
      breakpoint: { max:940 , min: 300 },
      items: 1
    }
    
    
  };
  
  return (
    <div>
        
          
     

     <Carousel responsive={responsive} >
     
      {products.map((product,id)=>{
        
        return(
          <div className="">
<div className="ml-5"key={product.id}>

    <ProductCard id={product.id} price={product.Price} image={product.image} Description={product.Description}/>
    </div>
          </div>
        )
      })}
     
    
</Carousel>
    </div>
  )
}

export default Sliders
