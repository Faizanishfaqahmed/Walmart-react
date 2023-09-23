import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown/subComponentsNav/Dropdown'
import {MdPersonOutline} from 'react-icons/md'
import heart from '../assets/images/heart.png';
import {BsCart2} from 'react-icons/bs'
import mobicon from '../assets/images/mobicon.png';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {CiLocationOn} from 'react-icons/ci';
import {RiHomeLine} from 'react-icons/ri';
import{HiMiniBars3} from 'react-icons/hi2';
import {IoIosArrowUp} from 'react-icons/io'
import {BsFillGridFill} from 'react-icons/bs'
import {SlGrid} from 'react-icons/sl'
import walmartlog from './Dropdown/img/images/logo-removebg-preview.png'
import SearchDrop from '../Header/Dropdown/subComponentsNav/SearchDrop';
import SearchBar from '../Header/Dropdown/subComponentsNav/SearchBar'
import Dgrid from '../Header/Dropdown/subComponentsNav/Dgrid';
import Login from '../Header/login'
import Regiter from '../Header/Register';
import ChangeBars from '../Header/Dropdown/subComponentsNav/changeBars';



const NavBar = () => {
   

  const[isDroped, setIsDroped]=useState(false);
  const [isFocused,setFocused] = useState(false);
  const [isRightBar,setIsRightBar] = useState(false);

  let smenuRef = useRef();
  let rmenuRef = useRef();


useEffect(()=>{
  let handler1 = (e)=>{
    if(!smenuRef.current.contains(e.target)){
      setIsDroped(false);
      
      
    }
   
  }
  document.addEventListener('mousedown',handler1)
  return ()=>{
    document.removeEventListener('click',handler1)
  }
})

useEffect(()=>{
  let handler2 = (e)=>{
    if(!rmenuRef.current.contains(e.target)){
      setIsRightBar(false);
      
       
    }
   
  }
  document.addEventListener('mousedown',handler2)
  return ()=>{
    document.removeEventListener('click',handler2)
  }
})
 const funDrop =()=>{
  setIsDroped(true);
 }
 
  isRightBar ? document.body.style.overflow = 'hidden' : document.body.style.overflow ='auto';

  
  return (
    <div className="">
       <div className="fixed z-[10000] h-screen" ref={rmenuRef}>{isRightBar && <ChangeBars/>}</div>
  <div className={`z-[10000] fixed w-full mx-auto ${isRightBar ?'w-[700px] ml-[300px]'  : 'w-[100%] ml-0'} `}  >
     
       
      
           <div className=' bg-[#0071dc] flex items-center   ' >
           
        <div className="flex"><div className=""><Dgrid > <HiMiniBars3 className='-ml-10 -mt-4 w-28 h-10 sm:flex absolute z-40 md:hidden ' onClick={()=>{setIsRightBar(true)}} /></Dgrid>
        </div> <NavLink to='/'>
          <div className="">
          <img src={walmartlog} alt="" className=' sm:w-28 sm:shrink-0 z-20 w-28 p-2  ml-2 -mt-3 sm-flex md:hidden ' /></div></NavLink></div>
      
      {/*Left side */}
      <NavLink to='/'> <div className=' p-2 lg:px-4 gap-x-3 shrink-0 flex items-center '> 
          
          <button  className='rounded-full  border-none box-shadow-none h-10 hover:bg-blue-800 shrink-0 -ml-16 hidden md:flex'> 
            <div className="flex justify-center">
            <div className="text-white text-[24px] font-bold -ml-6 md:flex hidden absolute"> <h2>Walmart</h2></div>
            <div className="ml-24 "><img src={walmartlog} alt="" className=' w-20 p-2 shrink-0 ml-6 -mt-2 md:ml-10 md:flex hidden ' /></div>
            </div> 
           
            
          
           </button>  
           </div></NavLink> 
    
      <div className=' p-3 xl:flex  hidden shrink-0 '>        
     <button  className='rounded-full border-none box-shadow-none hover:bg-blue-800 h-10 w-40'>
      <div className="flex">
        <div className="text-white mt-1 ml-4 xl:flex hidden"> <SlGrid/></div>
      <div className="text-white ml-10 font-bold lg:absolute xl:flex hidden "><NavLink to="/products">Departments</NavLink></div>
      </div>
     
      </button> 
      </div>

      <div className=' p-3 xl:flex   hidden shrink-0'>        
     <button  className='gap-8 rounded-full border-none box-shadow-none
      hover:bg-blue-800 h-10 w-28'><div className="flex p-2">
        <div className=""> <BsFillGridFill className='text-white rouned-full mt-1 xl:flex hidden'/></div> 
        <div className="ml-2"><span className='text-white font-bold xl:flex hidden'>Services</span></div>
      </div>
       
     
     </button> 
      </div>
     
     
      {/*Middle side */}
      <div  className=' relative   items-center flex-1 px-1 py-2 w-full -mt-10  lg:w-full '  > 
      
<div className='absolute rounded-full p-1.5 right-4 w-full'>
<SearchBar  className='absolute w-full p-0' onFocus={()=>setFocused(true)}/>
   
</div> 


      </div>
      {/*Right side */}
      <div className=' p-3 gap-8 rounded-full border-none box-shadow-none gap-x-2 hidden md:flex'>        
   <button className='h-10 w-28 hover:bg-blue-800 rounded-full'>
   <div className='ml-2 mt-2 absolute'><img src={heart}alt="" className='h-4 w-4' /></div>
   <p className='text-white text-[10px]'>Recorder</p>
   
    <h2 className='text-white font-bold text-[14px] font-arial ml-4'>My Items</h2>  
    </button> 
    
      </div>
     
      
      <div className=' p-3 gap-8 rounded-full border-none box-shadow-none hidden md:flex'>   
       
   <button className='h-10 w-28 hover:bg-blue-800 rounded-full '>
    <p className='text-white text-[10px] -ml-1 '>Sign In</p><MdPersonOutline className='text-white ml-2 -mt-2 absolute'/>
    <h4 className='text-white text-[14px] -mt-1 font-bold'>Account</h4></button> 
     </div>
     <NavLink to='/cart'>
     <div className='flex justify-center align-center p-2'>
      <button className='h-16 w-12 hover:bg-blue-800 rounded-full shadow-black-400'> 
        <div className='bg-[#ffc220] rounded-full h-4 w-4 absolute text-center flex align-center justify-center border-black ml-4 '>
          <p className='text-black h-2 w-2  text-[10px]'>0</p></div>
      <BsCart2 className='text-white w-10 h-10 p-2'/>
      <h3 className='text-[10px] text-white'>$0</h3>
      </button>

     </div></NavLink>
         </div>
         {/*Information Section */}
         <hr className='sm:flex hidden'/>
         <div>
<div className="bg-[#0071dc] flex items-center p-2" onClick={funDrop} >

<img src={mobicon} alt="" className='h-6 w-6 ml-2'  />
  <p className='text-white font-bold text-[12px] ml-2 cursor-pointer'>How do you want your items?</p>
  <div className=" flex items-center  " >
  <button > { isDroped ? <IoIosArrowUp className='text-white w-4 h-4 font-thin ml-2'/> :<RiArrowDropDownLine className='text-white w-6 h-6 font-thin'/>}</button> 

  <p className='text-white font-thin text-[14px] sm:flex hidden'>|</p>
  </div>
  <div className=" items-center sm:flex hidden"  >
  <CiLocationOn className='text-white w-4 h-4 font-thin ml-2'/><p className='text-white text-[12px] sm:flex hidden cursor-pointer'>Scramento, 95829</p>
  <RiHomeLine className='text-white w-4 h-4 font-thin ml-2' />
  <p className='text-white text-[12px] ml-2 cursor-pointer'>Scramento Supper Center</p></div>
  </div><div className='absolute -mt-8 ml-[610px] w-full'>
  <div className="flex items-center">
    <ul className="flex items-center justify-between text-white ml-10 transition-all duration-500 ">
      <li><a href=""className='ml-6 text-[12px] font-bold hover:underline sm:flex md:ml-4 xl:ml-1 hidden duration-500'>Deals</a></li>
      <li><a href="" className='ml-6 text-[12px] font-bold  hover:underline md:flex md:static xl:flex hidden'>Grocery & Essetials</a> </li>
      <li><a href="" className='ml-6 text-[12px] font-bold hover:underline  md:w-auto lg:flex xl:flex hidden'>Halloween</a></li>
      <li><a href="" className='ml-6 text-[12px] font-bold hover:underline md:w-auto xl:flex lg:flex hidden'>Walmart Style</a></li>
      <li><a href="" className='ml-6 text-[12px] font-bold hover:underline lg:flex hidden shrink-2'>Beauty Glow Up</a></li>
      <li><a href="" className='ml-6 text-[12px] font-bold hover:underline lg:flex hidden shrink-2'>Tailgating</a></li>
      <li><a href="" className='ml-6 text-[12px] font-bold hover:underline lg:flex hidden shrink-2'>Fashion</a></li>
      <li><a href="" className='ml-6 text-[12px] font-bold hover:underline xl:flex hidden shrink-2'>Home</a></li>
      <li><a href="" className='ml-6 text-[12px] font-bold hover:underline xl:flex  hidden shrink-2'>Registry</a></li>
      <li><a href=""className='ml-6 text-[12px] font-bold hover:underline  xl:flex  hidden shrink-2'>ONE Debit</a></li>
      <li><a href=""className='ml-6 text-[12px] font-bold hover:underline  xl:flex  hidden '>Walmart +</a></li>
    </ul>
  </div>
</div>
         </div>
         <div className='-mt-[359px] ml-52' ref={smenuRef} > {isDroped && <Dropdown/>}</div>
        <div className=""><Regiter/></div>
        <div className=""><Login/></div>
       
    </div>
    </div>
    
  )
}

export default NavBar