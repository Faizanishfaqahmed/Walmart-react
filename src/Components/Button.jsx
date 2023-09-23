import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-red-500 rounded-full h-full w-40 font-bold'>{props.children}</button>
    </div>
  )
}

export default Button
