import React ,{useState}from 'react';
import DataCard from './DataCard'
import Data from './Data';


const Card = () => {
    const[data,setData]=useState(Data);
   
  return (
    <div className="">
<DataCard mainData={data}/>
    </div>
  )
}

export default Card
