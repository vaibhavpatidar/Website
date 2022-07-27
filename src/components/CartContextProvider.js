
import React, { useState } from 'react'

export const CartContext = React.createContext({
  cartItems: [],
})
export const CardContextProvider = (props) => {
   
    const setItems = (items) => {
        console.log(items, 'items')
      setState({...state, cartItems: items})
    }
  
    const initState = {
      cartItems: [],
      setItems: setItems
    } 
  
    const [state, setState] = useState(initState)
  
    return (
      <CartContext.Provider value={state}>
        {props.children}
      </CartContext.Provider>
    )
  }