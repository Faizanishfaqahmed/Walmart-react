import React, {useState} from 'react'
import walmartlog from '../img/images/logo-removebg-preview.png'
import walmartplus from '../img/images/wplus-icon-blue.png'
import myitemsside from '../img/images/myitemsside.png'
import purchase from '../img/images/purchase list.png'
import {BsPerson} from 'react-icons/bs'
import {CiCircleQuestion} from 'react-icons/ci'
import {BsGrid} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {CiGrid41} from 'react-icons/ci'
import {BiMessageRounded} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
import {LiaGiftSolid} from 'react-icons/lia'
import NavDepartmentBar from './NavDepartmentBar'

const Rigntnavbar = (props) => {
const [showDep,setShowDep]=useState(false)
const [showSer,setShowSer]=useState(false)
props.getValue(showDep,showSer);
  return (
    <div>
        <div className="h-screen w-[300px]  bg-white  absolute z-20 mt-10 ">
       <div className="w-48 cursor-pointer">  <img src={walmartlog} alt="logo"className=' w-14 mt-2 ml-2 absolute' /></div>
      <div className="ml-20 -mt-3"><button className='bg-[#0071dc] rounded-full w-40 h-7 mt-6 hover:bg-blue-800'>
        <p className='text-white text-[12px] font-bold'>Sign in or Create account</p></button></div>
      </div>
      <div className="absolute mt-32 z-20 ml-6 flex">
        <div className=""><img src={walmartplus} alt="" className='w-5'/></div>
        <div className="ml-3 -mt-1 cursor-pointer"><p className='text-4 cursor-pointer'>Walmart+</p></div>
      </div>
{/* other items */}
      <div className="z-30 absolute border-y-[1px] border-gray-200 h-40 mt-44 ml-4 w-[260px] ">
      <div className="flex ">
        <div className="mt-10 ml-4 cursor-pointer "><img src={purchase} alt="" /></div>
        <div className="cursor-pointer"><h1 className='mt-10 ml-2 text-[12px] text-gray-500 cursor-pointer'>Purchase History</h1></div>
        </div>

        <div className="flex -mt-4">
        <div className="mt-11 ml-4 cursor-pointer"><img src={myitemsside} alt="" className='cursor-pointer'/></div>
        <div className=""><h1 className='mt-10 ml-2 text-[12px] text-gray-500 cursor-pointer'>My Items</h1></div>
        </div>

        <div className="flex -mt-4">
        <div className="mt-10 ml-4 cursor-pointer"><BsPerson /></div>
        <div className=""><h1 className='mt-10 ml-2 text-[12px] text-gray-500 cursor-pointer'>Account</h1></div>
        </div></div> 
        {/* next list */}
        <div className="z-30 absolute  h-40 mt-[310px] ml-4 w-[260px] flex">
          <div className="mt-12 ml-4 cursor-pointer "><CiCircleQuestion className=''/></div>
          <div className="mt-10"><p className='mt-2 ml-2 text-[12px] text-gray-500 cursor-pointer'>Help</p></div>
        </div>
        {/* next list */}
        <div className="z-30 absolute border-y-[1px] border-gray-200 h-28 mt-[395px] ml-4 w-[260px] ">
      <div className="flex cursor-pointer ">
        <div className="mt-8 ml-4 pointer-cursonr "><AiOutlineHeart className='text-[15px] mt-2 cursor-pointer'/></div>
        <div className="cursor-pointer"><h1 className='mt-9 ml-2 text-[12px] text-gray-500 cursor-pointer'>Lists</h1></div>

        </div>

        <div className="flex -mt-4">
        <div className="mt-11 ml-4 cursor-pointer"><LiaGiftSolid className=''/></div>
        <div className=""><h1 className='mt-10 ml-2 text-[12px] text-gray-500 cursor-pointer'>Registers</h1></div>

        </div> </div> 

{/* next list */}
        <div className="z-30 absolute border-y-[1px] border-gray-200 h-28 mt-[506px] ml-4 w-[260px] ">
      <div className="flex cursor-pointer ">
        <div className="mt-8 ml-4 pointer-cursonr "><BsGrid className='text-[15px] mt-2'/></div>
        <div className="cursor-pointer"><h1 className='mt-9 ml-2 text-[12px] text-gray-500 cursor-pointer ' onClick={()=> setShowDep(true)}>Departments</h1></div>
        <div className="mt-10 ml-64 absolute"><IoIosArrowForward/></div>
        </div>

        <div className="flex -mt-4">
        <div className="mt-11 ml-4 cursor-pointer"><CiGrid41 className=''/></div>
        <div className=""><h1 className='mt-10 ml-2 text-[12px] text-gray-500 cursor-pointer' onClick={()=> setShowSer(true)}>Services</h1></div>
        <div className="mt-10 ml-64 absolute"><IoIosArrowForward className='text-8 cursor-pointer'/></div>
        </div> </div> 
{/* next list */}
        
       
        <div className='mt-[620px] z-20 absolute ml-4'>
        <div className="flex -mt-4">
        <div className="mt-10 ml-4 cursor-pointer"><BiMessageRounded /></div>
        <div className=""><h1 className='mt-10 ml-2 text-[12px] text-gray-500 cursor-pointer'>Feed Back</h1></div>
        </div>
        
        </div>
        
       <div className="">
       {showDep && <NavDepartmentBar/> } 
       </div>


        
    </div>
  )
}
 
export default Rigntnavbar