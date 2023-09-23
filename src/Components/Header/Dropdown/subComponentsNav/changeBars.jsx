import React, {useState} from 'react'
import Rigntnavbar from './Rigntnavbar'
import NavDepartmentBar from './NavDepartmentBar'
import NavServiceBar from './NavServiceBar'

const ChangeBars = () => {
const[showDep,setShowDep]=useState(false);
const[showSer,setShowSer]=useState(false);
const getValue = (Dep,Ser) => {
setShowDep(Dep);
setShowSer(Ser);
}
const getDepValue=(dep)=>{
setShowDep(dep);
}

console.log(showDep);

  return (
    <div  className='  h-screen w-[300px] overflow-hidden z-[10000000] fixed -mt-10'>
      <div className={`${showDep ? 'ml-[400px]': 'ml-[0px]'}`}><Rigntnavbar getValue={getValue} /></div>
<div className={`${showDep ? 'ml-[0px]':'ml-[400px] ease-in'}`}><NavDepartmentBar depValue={getDepValue}/></div>
<div className={`${showSer ? 'ml-[0px]':'ml-[400px]'}`}><NavServiceBar serValue={setShowSer}/></div>


    </div>
  )
}

export default ChangeBars