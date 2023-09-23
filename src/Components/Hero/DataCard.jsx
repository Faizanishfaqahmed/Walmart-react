import React from 'react'
import laptop1 from '../assets/images/laptop1.png'
import Wallpaper from '../assets/images/Wallpaper.jpg'

const DataCard = ({mainData}) => {
    console.log(mainData);
  return (
    
    <div>
        {
            mainData.map((mdt)=>{
return (<>
 <div className=" m-t[600px] ml-10">
        <div className=" bg-gray-200 h-full rounded-lg w-full border-1 border-gray-400 p-5">
             <img src={laptop1} alt="image" className=' w-full h-full' /> 
            <span className='title'>{mainData.title}</span>
            <h1 className='text-red-500'>{mainData.subtitle}</h1>
        </div>
        </div>

</>)
            })
        }

       
        
    </div>
  )
}

export default DataCard