import React from 'react'
import Backdrop from './backdrop'
import Carddrop from './Carddrop'
import {IoIosArrowDropright} from 'react-icons/io'
import {IoIosArrowDropleft} from  'react-icons/io'
import {useState , useEffect,useRef} from 'react'
import SearchResult from './searchResult'





const SearchDrop = ({result}) => {
    
    const text = [
        {id:1,
            btnText:"Halloween Lights"},
        {id:2,
            btnText:"BBQ Grills"},
        {id:3,
            btnText:"Halloween Pajamas"},
        {id:4,
            btnText:"Pioneer Women Clearance"},
        {id:5,
            btnText:"55 Inch Smart TV"},
        {id:6,
            btnText:"55 Inch Smart TV"},
        {id:7,
            btnText:"55 Inch Smart TV"},
        {id:8,
            btnText:"55 Inch Smart TV"},
        {id:9,
            btnText:"55 Inch Smart TV"}
    ]
    
    const slideRight = ()=>{
       var slider = document.getElementById('slider');
       slider.scrollLeft = slider.scrollLeft +100;
       console.log("i am right")
    }
    const slideLeft =()=>{
        var slider = document.getElementById('slider');
       slider.scrollLeft = slider.scrollLeft -100;
       console.log("I am left")
    }
           
    
  return (
    
    <div className='absolute bg-white w-[100%] overflow-hidden ml-2 mt-2  group shadow-md shadow-gray-300 radius-[10px] max-h-[300px] overflow-y-scroll' >
        <div className="">
            <h3 className='font-bold text-[12px] ml-4 flex flex-col '>Your Recent Searches</h3>
            {result.map((res,id)=>{
        return <SearchResult res={res} key={id}/>
        })}
        </div>
        
        <div className="bg-white w-full ml-4 mt-3"><h2 className='font-bold'>Trending</h2></div>
        <br/>
        <div className='flex relative '>
            <div id="slider" className=" flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar shadow-lg" >
            {text.map((el , index)=>{
        return <Carddrop key={index} text={el.btnText} className="ease-in-out pointer-cursor hover:scale-105" /> })}
            </div>
            
            
       
              
      
        </div>
       
      <IoIosArrowDropright className='hidden group-hover:block -mt-14 ml-[34rem] absolute text-[40px] pointer-cursor duration-300' onClick={slideRight}/>
      <IoIosArrowDropleft className='hidden group-hover:block absolute text-[40px] -mt-14 pointer-cursor' onClick={slideLeft}/>
        
        
        
      
    </div>
  )
}

export default SearchDrop