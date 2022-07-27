import '../pages/index.css';
import React, { useContext, useState } from 'react';
import db from '../config'
import { useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import AddToCart from '../pages/AddToCart';
import { UserContext } from '../App';
import { CartContext } from './CartContextProvider';
import { FaTimes } from "react-icons/fa";

function Sidenavigation({sideNavFlag,sideNavCloseFlag, UserName}){
    const {cartItems} = useContext(CartContext);
    
  
  return (
   <div>
    <div className={sideNavFlag < 1 ? "sidenav sidenav-show" : "sidenav"}>
          <div className="closebtn" onClick={(event) => {sideNavCloseFlag(1)}}>Close <FaTimes/></div>
          <p className={cartItems.length > 0 ? "showcart" : " "}>No items in Cart</p>
          
          <AddToCart UserName={UserName}/>
        </div>
    </div>
  )
}

export default Sidenavigation;
