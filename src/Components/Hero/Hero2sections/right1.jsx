import React from 'react'
import cutlary from '../Images/cutlary.jpg';
import  bodymove from '../Images/bodymove.jpg';
import  little from '../Images/little extra.jpg';

const Right = (props) => {
  return ( 
    <div className='flex'>
         <div className=" mb-2  ml-2 ">
<img src={props.image} alt="" className='rounded-xl  h-[35rem] ' />
        </div>
        <div className="mt-[60px] text-[#041e42] absolute z-[100] ml-2">
        <p> {props.title}</p>
      </div>
        <div className="text-[d#041e42] font-bold z-[100] absolute mt-20  text-[50px] w-[30rem] ml-2"><p>{props.uptitle} </p></div>
        
        <div className="underline  text-[12px] cursor-pointer absolute mt-[12rem] ml-10 text-black p-2  h-4 ">
          </div>
      <div></div>
      
    </div>
  )
}

export default Right