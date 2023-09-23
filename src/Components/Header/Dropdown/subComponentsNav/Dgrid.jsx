import React from 'react'

const Dgrid = (props) => {
  return (
   <button className='bg-indigo text-white font-[poppins] py-2 px-6 rounded md:ml-8 '>
{props.children}
   </button>
  )
}

export default Dgrid