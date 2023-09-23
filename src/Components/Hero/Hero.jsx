import React from 'react'

import Card from './Card'
import Middle from './herosubcomponents/middle'
import Right from './herosubcomponents/right'
import Left from './herosubcomponents/left'
import Sliders from './herosubcomponents/Sliders'
import Carosal from './herosubcomponents/Carosal'
import MediaSection from './MediaSection'
import Hero2 from '../Hero2'


const Hero = () => {
    

  return (<>
  <div className="">
  <div className="flex    mt-[130px] relative  ">
    <div className="ml-2 mr-2">
      <Right/>
    </div>
    <div className="ml-2 mr-2">
    <Middle/>
    </div>
      <div className="ml-2 mr-2">
        <Left/>
      </div>
           
  </div>
  <div className="flex">
    <div className="mt-[20px]"><h1 className='text-20 font-bold'>Flash Deals</h1><p className='text-[12px] text-gray-500 '>Up to 56% off</p></div>
    <div className="mt-10 absolute right-10 underline text-[12px]"> <a href="#">View all</a></div>
  </div>

{/* Slider section */}
<div className="border-gray-300 border-b-[1px] h-[28rem]">
<Sliders/>
</div>
<h1 className='font-bold'>Continue for Shopping</h1>
<div className="border-gray-300 border-b-[1px] h-[28rem]">
<Sliders/>
</div>
<h1 className='font-bold'>Don't forget a thing</h1>
<p className='text-[0.7rem]'>Canopies, BBQs, games and More</p>

<div className="flex border-gray-300 border-b-[1px] h-[30rem]">
<div  className="h-[400px] w-[700px] mt-10">
<Carosal/>
</div>
<div className="w-[] -mt-4"><MediaSection/></div> 

</div>

<div className="">
<Hero2/>
</div>
<h1 className='font-bold'>More boo for your buck</h1>
<p className='text-[0.7rem] text-gray-500'>All your Frieght night needs.</p>
<div className="border-gray-300 border-b-[1px] h-[28rem]">
<Sliders/>
</div>
</div>
  
  
  
       
  
  </>
    
        
  )
}

export default Hero