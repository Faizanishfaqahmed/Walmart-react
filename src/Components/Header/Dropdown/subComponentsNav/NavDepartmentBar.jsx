import React,{useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {MdArrowForwardIos} from 'react-icons/md'

const NavDepartmentBar = ({depValue}) => {
  const data =[
    {"id":1, "item":"Deals"},
    {"id":2, "item":"Halloween"},
    {"id":3, "item":"Fall Shop"},
    {"id":4, "item":"Tailgating"},
    {"id":5, "item":"Grocery"},
    {"id":6, "item":"Clothing, Shoes & Accessories"},
    {"id":7, "item":"Home, Furniture & Appliances"},
    {"id":8, "item":"Electronics"},
    {"id":9, "item":"Patio & Garden"},
    {"id":10, "item":"Auto & Tires"},
    {"id":11, "item":"Baby"},
    {"id":12, "item":"Kids"},
    {"id":13, "item":"Pets"},
    {"id":14, "item":"Sports & Outdoors"},
    {"id":15, "item":"Beauty"},
    {"id":16, "item":"Perosonal Care"},
    {"id":17, "item":"House Hold Essentions"},
    {"id":18, "item":"Home Improvements"},
    {"id":19, "item":"Office & School Supplies"}  
  ];
  console.log(data);
  const[showDep,setShowDep]=useState(false);
  depValue(showDep);
  return (
  
    <div className='absolute flex z-40 h-screen bg-white overflow-scroll'>
      <div className="relative w-[300px] flex h-full border-[1] border-b-gray-600 flex-col ">
        <div className="ml-4 mt-7 absolute cursor-pointer">
          <IoIosArrowBack className='text-gray-500 text-[20px]'/>
        </div>
        <div className="ml-12 px-2 mt-6 mb-6 text-gray-700 text-[20px] cursor-pointer" onClick={()=>setShowDep(false)}><h1>Back to main menu</h1>
        </div>
        <hr />
        <div className="flex border-b-[1px] border-gray-300 h-20">
          <div className="ml-6 mt-6 font-bold text-[18px]"><h1>All Departments</h1>
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

export default NavDepartmentBar
