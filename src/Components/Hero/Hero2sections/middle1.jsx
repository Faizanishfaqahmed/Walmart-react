import React from 'react'
import Heroimage1 from '../Images/Heroimage1.jpg'
import Watches from '../Images/Watches.jpg'
import WeeklyDeals from '../Images/WeeklyDeals.jpg'
import tryitforfree from '../Images/tryitforfree.jpg'
import Halloween from '../Hero2sections/Halloween.json'
import { NavLink } from 'react-router-dom'

const Middle = () => {
  return (
    <div className="  flex  flex-col  w-full h-full relative ">
      <div className=""><NavLink to='/products'>
          <img src={Halloween[1].image} alt="" className=' rounded-xl w-[33rem] h-[15rem]'/></NavLink>
          <div className="-mt-[230px] text-[#041e42] absolute z-[100] ml-6 text-[1.8rem] font-bold w-60">
          <NavLink to='/products'> <p> {Halloween[1].title}</p></NavLink>
      </div>
      <div className="underline hover:no-underline text-[12px] cursor-pointer absolute -mt-[140px] ml-8 text-[#041e42]"> <NavLink to='/products'><a href="">Shop now</a></NavLink></div>
        </div>
     
      <div className="flex mt-2">
        <div className="">
          <img src={Halloween[2].image} alt="" className=' rounded-xl w-[16rem] h-[20rem]' />
          <div className="-mt-[280px] text-[#041e42] absolute z-[100] ml-6 text-[1.5rem] w-[13rem] font-bold">
        <p> {Halloween[2].title}</p>
      </div>
      <div className="underline hover:no-underline text-[12px] cursor-pointer absolute -mt-[210px] ml-8 text-[#041e42]"><a href="">{Halloween[2].subtitle}</a></div>
        </div>
        <div className="ml-4">
          <img src={Halloween[3].image} alt="" className=' rounded-xl w-[16rem] h-[20rem]' />
          <div className="-mt-[280px] text-[#041e42] absolute z-[100] ml-6 text-[1.5rem] w-[13rem] font-bold">
        <p> {Halloween[3].title}</p>
      </div>
      <div className="underline hover:no-underline text-[12px] cursor-pointer absolute -mt-[210px] ml-8 text-[#041e42]"><a href="">{Halloween[3].subtitle}</a></div>
        </div>
        
        </div>
        
      </div>
     
        
    
    )
}

export default Middle
