import React from 'react'
import Heroimage1 from '../Images/Heroimage1.jpg'
import Watches from '../Images/Watches.jpg'
import WeeklyDeals from '../Images/WeeklyDeals.jpg'
import tryitforfree from '../Images/tryitforfree.jpg'

const Middle = () => {
  return (
    <div className="  flex  flex-col  w-full h-full relative ">
      
      <div className="w-full">
        <img src={Heroimage1} alt=""className='w-full rounded-xl ' />
      </div>
      <div className="mt-[60px] text-white absolute z-[100] ml-6">
        <p> Find Your Fasion at Walmart</p>
      </div>
      <div className="text-white font-bold z-[100] absolute mt-20  text-[50px] w-[30rem] ml-6"><p>New Trending Fashion  </p></div>
        <div className="underline  text-[12px] cursor-pointer absolute mt-[250px] ml-8 text-black p-2  h-4 ">
          <button className='bg-white rounded-full w-20 h-8 font-bold border-[1px] border-black hover:border-2'>Shop all</button></div>
      <div className="flex mt-4">
        <div className="w-[50%]">
          <img src={Watches} alt="" className='h-[410px] rounded-xl w-[400px]'/>
          <div className="-mt-[350px] text-white absolute z-[100] ml-6 text-[2.5rem]">
        <p> Smart Watches</p>
      </div>
      <div className="underline hover:no-underline text-[12px] cursor-pointer absolute -mt-[250px] ml-8 text-white"><a href="">Shop now</a></div>
        </div>
        <div className="w-[50%] ml-4 ">
          <img src={WeeklyDeals} alt="" className='  h-[410px] rounded-xl w-[400px]'/>
          <div className="-mt-[360px] text-dark-blue-800 absolute z-[100] ml-6 font-bold text-[20px]">
        <p> Flesh Deals</p>
      </div>
      <div className="underline hover:no-underline text-[12px] cursor-pointer absolute -mt-[320px] ml-8"><a href="">Shop now</a></div>
        </div>
        
      </div>
      <div className='w-full mt-4'>
          <img src={tryitforfree} alt="" className='  w-[800px]  h-[80%]' />
        </div>
        <div className="text-[darkblue]  z-[100] absolute mt-[900px]  text-[30px] w-[30rem] ml-6"><p>Members get free shipping with no order premium! </p></div>
        <div className="mt-[990px] text-[darkblue] absolute z-[100] ml-6  text-[12px]">
        <p> Terms apply</p>
      </div>
      <div className="mt-[1020px] text-[darkblue] absolute z-[100] ml-6  text-[14px] underline ">
        <p> Join Walmart +</p>
      </div>
        
    </div>
    )
}

export default Middle
