import React from 'react'
import BBQ from './BBQ.json'
import ProductCard from './ProductCard';
import { Paper, Button } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Carosal = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel responsive={responsive}>
   {BBQ.map((product,id)=>{
        
        return(
          <div className="">
<div className="ml-5"key={product.id}>

    <ProductCard id={product.id} price={product.Price} image={product.image} Description={product.Description}/>
    </div>
          </div>
        )
      })}
</Carousel>
  )
}

export default Carosal