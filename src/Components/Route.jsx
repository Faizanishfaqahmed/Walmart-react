import React from 'react'
import {Route} from 'react-router-dom'
import Products from '../Pages/Products'

const Rout = () => {
  return (
    <div>
        <Route path='/products' element={<Products/>}/>
    </div>
  )
}

export default Rout