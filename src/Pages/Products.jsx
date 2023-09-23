import Slider from '../Components/Hero/herosubcomponents/Sliders'
import ProductData from '../Data/ProductData.json'
import * as React from 'react';
import {CartState} from "../context/context"
import SingleProduct from '../Pages/SingleProduct'


const Products = ({productItems }) => {
 
  const {state:{products}} = CartState();
  return ( 
    <div className='pt-40 flex '>
     
<div className=" flex flex-wrap justify-between">
  {productItems.map((productItem)=>{
  
return(
 <div>
  <div><SingleProduct products={productItem}/></div>

  <div className=" bg-gray-300 border-2 mt-2 border-blue-400 mb-2 rounded-xl shadow-lg ml-8 hover:-mt-2 hover:shadow-[4px 4px 4px bg-red-500]">
    
  <div className="flex justify-center"><img className='w-60 h-60' src={productItem.image} alt={productItem.title} /></div>
    <div className="flex justify-center"><h3>{productItem.title}</h3></div>
    <div className="flex justify-center">Price : ${productItem.price}</div>
    <div className="flex justify-center">In Stock: {productItem.inStock}</div>
    <div className="flex justify-center"> {productItem.desc}</div>
    <div className="flex justify-center"><button className='rounded-full bg-blue-800 border-2
     border-black hover:border-4' >
      <p className='text-white p-2 mb-2 w-[200px] '>Add to Cart</p></button></div>
  </div> 
 </div>
  
)
  })}
</div> 
<div className="">
  {/* <Filters/> */}
   {products.map((prod)=>{return <SingleProduct prod={prod} key={prod.id}/> })} 
</div>


    </div>
  )
}

export default Products 