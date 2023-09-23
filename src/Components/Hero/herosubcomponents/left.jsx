import React from 'react'
import right1img from '../Images/right1img.jpg'
import justRightBag from '../Images/justRightBag.jpg'
import boxes from '../Images/boxes.jpg'

const Left = () => {
  return (
    <div className=''>
         <div className=" mb-2  ml-2 ">
<img src={right1img} alt="" className='rounded-xl w-[400px] ' />
        </div>
        <div className="text-blue-800 font-bold z-30 absolute -mt-40 ml-4"><p>Walmart Men's Fashion </p></div>
        <div className="underline  hover:no-underline text-[12px] cursor-pointer absolute -mt-24 ml-8 text-blue-800"><a href="">Shop now</a></div>
        <div className=" mb-2  ml-2">
<img src={boxes} alt="" className='rounded-xl w-[400px]' />
<div className="text-blue-800 font-bold z-30 absolute -mt-40 ml-6"><p>Boxes </p></div>
        <div className="underline hover:no-underline  text-[12px] cursor-pointer absolute -mt-24 ml-8 text-blue-800"><a href="">Shop now</a></div>
        </div>
        <div className=' mb-2  ml-2'>
            <img src={justRightBag} alt="" className='rounded-xl  w-[400px] '/>
            <div className="text-blue-800 font-bold z-30 absolute -mt-[500px] ml-4"><p>Bag these Styles </p></div>
        <div className="underline hover:no-underline  text-[12px] cursor-pointer absolute -mt-[440px] ml-8 text-blue-800"><a href="">Buy Now</a></div>
        </div>
    </div>
  )
}

export default Left
