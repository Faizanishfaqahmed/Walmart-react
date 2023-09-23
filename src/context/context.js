import React , {createContext,useReducer,useContext} from 'react'
import faker from 'faker';
import ProductData from '../Data/ProductData.json'
import cartReducer from './cartReducer'

const Cart = createContext()
const Context = ({children}) => {
    const products = [...Array(35)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image:faker.random.image().String,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDeliver:faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1,2,3,4,5]),
            })) 
            console.log(products);
        const[state,dispatch] = useReducer(cartReducer,{
          products:products,
          cart:[]
        })
  return (
    <Cart.Provider value={{state, dispatch}} >
        
    {children}
    </Cart.Provider>
  )
}

export default Context;
export const CartState = ()=>{

return useContext(Cart);
}

