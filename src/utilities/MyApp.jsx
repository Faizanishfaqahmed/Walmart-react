import React, {useState}from 'react'

const MyApp = (Components,pageProps) => {
    useEffect(()=>{
        console.log("hey I am Use effect from app.js")
    },[]);
    const [cart,setCart] =useState([]);

    const [subTotal,setSubTotal] =useState(0);
    const saveCart=(myCart)=>{
    localStorage.setItem('cart',myCart)
    }
    
    const addCart =(itemCode,qty, price, title,size,variant)=>{
      let newCart = cart;
    if (itemCode in cart){
     newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty:1, price, title, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
    }
    
    const clearCart =() =>{
    setCart({})
    saveCart({})
    }
    const removeFromCart =(itemCode,qty, price, title,size,variant)=>{
      let newCart = cart;
    if (itemCode in cart){
     newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
    }
  return (
    <div>MyApp</div>
  )
}

export default MyApp