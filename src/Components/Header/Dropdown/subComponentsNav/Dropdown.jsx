import React from 'react'
import shipping from '../img/images/shipping.png';
import Pickup from '../img/images/Pickup.png'
import Dilivery from '../img/images/Dilivery.png'
import { Typography,Button } from '@mui/material';
import {MdOutlineLocationOn} from 'react-icons/md'
import {LiaWarehouseSolid} from 'react-icons/lia'
import {IoIosArrowForward} from 'react-icons/io'

const Dropdown = () => {

  return (
    <>
      <div className='h-80 w-[380px] bg-[#0071dc] absolute mt-[359px] -ml-60 rounded-lg flex justify-center '>
        <div className="p-6 ml-6 ">
          <img src={shipping} alt="shipping"  className='w-14 ml-3 '/>
          <p className='text-white text-[14px] font-bold ml-2'>Shipping</p>
        </div>
        <div className="p-2 ml-1 mt-4">
          <img src={Pickup} alt="pickup" className='w-14 ml-3 ' />
          <p className='text-white text-[14px] font-bold ml-2'>Pickup</p>
        </div>
        <div className="p-2 ml-1">
          <img src={Dilivery} alt="shipping" className='w-12 ml-3 mt-3' />
          <p className='text-white text-[14px] font-bold ml-2'>Dilivery</p>
        </div>
        <div className="mt-28 -ml-64 bg-white w-70 h-28 rounded-lg p-4 flex items-center">
        <Typography>
          <MdOutlineLocationOn className='ml-4 absolute'/>
          <div className="h-10 w-64  mt-1 pt-4  ml-2"><p className='text-[10px] ml-8 -mt-4'><span className='font-bold '>Add an address for shipping and delivery</span><br/>
Sacramento, CA 95829</p></div>
<button className='bg-blue-600 rounded-full text-white ml-4 w-60 mt-4 h-6 font-bold text-[12px]'>Add address</button>
        </Typography>
        </div> 
      <div className=" ml-10 w-[300px] h-14 bg-white mt-60 absolute rounded-lg">
<Typography>
<LiaWarehouseSolid className='flex justify-center items-center ml-10 mt-3 absolute'/>
<p><span className=' text-[10px] ml-16 mt-3 font-bold absolute'>Sacrmento Supercenter</span><br/>
<span className='text-[10px] ml-16'>8915 Gerber Road, Sacramento, CA 95829</span><IoIosArrowForward className='absolute ml-[280px] -mt-6 text-[20px] text-gray-600'/></p>

</Typography>
      </div>
       
       </div>    
    </>
  )
}

export default Dropdown
