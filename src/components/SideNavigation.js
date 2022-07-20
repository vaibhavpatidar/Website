import '../pages/index.css';
import React, { useContext, useState } from 'react';
import db from '../config'
import { useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import AddToCart from '../pages/AddToCart';
import { UserContext } from '../pages/selectItems';


function Sidenavigation({sideNavFlag,sideNavCloseFlag}){
    const user = useContext(UserContext);
    
  

  return (
   <div>
    <div className={sideNavFlag < 1 ? "sidenav sidenav-show" : "sidenav"}>
          <a className="closebtn" onClick={(event) => {sideNavCloseFlag(1)}}>&times;</a>
          <p className={user.length > 0 ? "showcart" : " "}>No items in Cart</p>
          <AddToCart />
        </div>
    </div>
  )
}

export default Sidenavigation;
