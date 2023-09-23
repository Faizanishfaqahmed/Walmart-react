import React from 'react'
import Sliders from './herosubcomponents/Sliders'
import media from './media files/media.mp4'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'




const MediaSection = () => {
  
  return (
    <div className="">
      <Video autoplay loop
    >
      <source src={media} type='video/webm'/>
      

    </Video>
    
    
    </div>
    
  )
}

export default MediaSection