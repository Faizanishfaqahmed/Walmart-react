import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {MdArrowForwardIos} from 'react-icons/md'

const NavServiceBar = ({serValue}) => {
  const data =[
    {"id":1, "item":"Auto Care Center Services"},
    {"id":2, "item":"Pharmacy"},
    {"id":3, "item":"Health & Wellnes"},
    {"id":4, "item":"Registy, Lists, & Gift"},
    {"id":5, "item":"Custom Cakes"},
    {"id":6, "item":"Photo Services"},
    {"id":7, "item":"Money Services"},
    {"id":8, "item":"Protection, Home & Tech"},
    {"id":9, "item":"Comunity & Giving"},
    {"id":10, "item":"Ordering Online"},
    {"id":11, "item":"Get Inspired"}
    
  ];
  console.log(data);
  return (
    <div className='absolute flex z-40 h-screen bg-white overflow-scroll'>
    <div className="relative w-[300px] flex h-full border-[1] border-b-gray-600 flex-col ">
      <div className="ml-4 mt-7 absolute cursor-pointer">
        <IoIosArrowBack className='text-gray-500 text-[20px]'/>
      </div>
      <div className="ml-12 px-2 mt-6 mb-6 text-gray-700 text-[20px] cursor-pointer" ><h1>Back to main menu</h1>
      </div>
      <hr />
      <div className="flex border-b-[1px] border-gray-300 h-20">
        <div className="ml-6 mt-6 font-bold text-[18px]" onClick={()=>serValue(false)}><h1>All Services</h1>
       </div>
       <div className=" mt-6 ml-14 text-[12px] underline decoration-solid text-gray-500"> <a href="#">See all</a>
       </div>
       </div>
       {/* items */}
       {data.map((dt , id)=>{
  return (<>
    <div className=" border-b-[1px] border-gray-300 h-10 flex mt-4" key={id}>
       <div className="mt-2 ml-64 absolute text-[12px]"><MdArrowForwardIos/></div>
       <div className="ml-10 text-gray-600" ><p>{dt.item}</p></div>
     </div>
    
    </>)
})}
       
       
        
       
        

    </div>
  </div>
  )
}

export default NavServiceBar
