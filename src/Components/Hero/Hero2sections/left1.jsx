import React from 'react'
import right1img from '../Images/right1img.jpg'
import justRightBag from '../Images/justRightBag.jpg'
import boxes from '../Images/boxes.jpg'
import { NavLink } from 'react-router-dom'

const Left = (props) => {
  return (
    <div className='flex'>
         <div className=" mb-2  ml-2 "><NavLink to='/products'>
<img src={props.image} alt="" className='rounded-xl h-[35.5rem] ' /></NavLink>
        </div>
        <div className="mt-[60px]  text-[#041e42] absolute z-[100] ml-6">
        <NavLink to='/products'>
        <p> {props.uptitle}</p></NavLink>
      </div>
        <div className="text-[d#041e42] font-bold z-[100] absolute mt-20  text-[50px] w-[30rem] ml-6"><p>{props.title} </p></div>
        <div className="underline  hover:no-underline text-[12px] cursor-pointer absolute -mt-24 ml-8 text-blue-800"><NavLink to='/products'><a href="">Shop now</a></NavLink></div>
        <div className="underline  text-[12px] cursor-pointer absolute mt-[12rem] ml-10 text-black p-2  h-4 ">
        <NavLink to='/products'>  <button className='bg-white rounded-full w-20 h-8 font-bold border-[1px] border-black hover:border-2'>Shop all</button></NavLink></div>
      <div></div>
      
    </div>

    
  )
}

export default Left
