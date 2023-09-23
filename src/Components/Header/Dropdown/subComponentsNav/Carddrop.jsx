import React from 'react'

const Carddrop = (props) => {
  return (
    <div>
      <div className="bg-white  relative  ">
            <button className='rounded-full border-black border-[1px] h-8  z-20 w-32 ml-2  text-[10px] hover:border-2 hover:mt-1'>
        {props.text}
     </button></div>
    </div>
  )
}

export default Carddrop
