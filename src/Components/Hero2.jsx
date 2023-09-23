import React from 'react'
import Left from './Hero/Hero2sections/left1'
import Halloween from './Hero/Hero2sections/Halloween.json'
import Middle from './Hero/Hero2sections/middle1'
import Right from './Hero/Hero2sections/right1'
import {NavLink} from 'react-router-dom'


const Hero2 = () => {
  return (
    <div className='flex'>
    
<div className=""><Left image={Halloween[0].image} title={Halloween[0].title} uptitle={Halloween[0].uptitle}/></div>
<div className="ml-2"><Middle /></div>
<div className=""><Right image={Halloween[4].image} title={Halloween[4].title} uptitle={Halloween[4].uptitle}/></div>


    </div>
  )
}

export default Hero2