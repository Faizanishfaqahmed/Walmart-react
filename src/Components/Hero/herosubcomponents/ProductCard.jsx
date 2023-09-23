import React from 'react'
import { Paper, Button } from '@mui/material'

import {AiOutlineHeart} from 'react-icons/ai'


const ProductCard = (props) => {
  return (
    <div>
      <div className="w-60 h-96 bg-white-100 cursor-pointer">
        <div className="">
          <img src={props.image} alt="Leonado" className='w-40 rounded-xl'/>
          <div className="  -mt-[13rem] ml-[110px] text-gary-500 w-8 h-8 rounded-full
           bg-white flex justify-center items-center"><AiOutlineHeart className='text-gray-800 text-[14rem]'/></div>
          </div>
          {/* typography */}
          <div className="flex  mt-[13rem]">
            <div className="-mt-0 text-[16px] ml-6 text-green-500 font-bold"><h4>{props.price}</h4></div>
          <div className="ml-4"><p className='text-[10px] line-clamp-8 mt-1 text-gray-500 line-through'>$269.99</p></div>
          </div>
          <div className="ml-6 w-48">
            <p className='text-[14px]'>{props.Description}</p>
          </div>
                <div className="mt-5 ml-6 ">
                  <button className='rounded-full border-[1px] border-gray-500 w-20 hover:border-2 hover:border-black'>Option</button>
                </div>

      </div>
    </div>
  )
}

export default ProductCard