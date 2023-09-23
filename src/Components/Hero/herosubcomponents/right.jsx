import React from 'react'
import cutlary from '../Images/cutlary.jpg';
import  bodymove from '../Images/bodymove.jpg';
import  little from '../Images/little extra.jpg';


const Right = () => {
  return ( 
    <div className=' w-full h-full '>
        <div className="mb-2 w-[400px]">
<img src={cutlary} alt="" className='rounded-xl ' />
<div className="text-[darkblue] font-bold z-30 absolute -mt-[200px] ml-8 text-[2rem]"><p>Cutlary Sets </p></div>
        <div className="underline  hover:no-underline text-[12px] cursor-pointer absolute -mt-24 ml-8 text-blue-800"><a href="">Shop now</a></div>
        </div>
        <div className="mb-2 w-[400px]">
<img src={bodymove} alt="" className='rounded-xl'/>
<div className="text-[darkblue] font-bold z-30 absolute -mt-[540px] ml-8 text-[2rem]"><p>Women fashion </p></div>
        <div className="underline  hover:no-underline text-[12px] cursor-pointer absolute -mt-[30rem] ml-8 text-blue-800"><a href="">Shop now</a></div>
        </div>
        <div className=" mb-2" > 
            <img src={little} alt="" className='w-[400px] h-[260px] rounded-xl'/>
            <div className="text-[darkblue] font-bold z-30 absolute -mt-[200px] ml-8 text-[1rem]"><p>Brand New Jewlary sets </p></div>
        <div className="underline  hover:no-underline text-[12px] cursor-pointer absolute -mt-[8rem] ml-8 text-blue-800"><a href="">Shop now</a></div>
        </div>
    </div>
  )
}

export default Right