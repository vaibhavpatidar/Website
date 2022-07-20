import './index.css';
import React, { useContext } from 'react';
import db from '../config'
import { useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import {UserContext} from './selectItems'


function AddToCart() {
    const user = useContext(UserContext);
    console.log("--++ ", user)
  return (
   <div>
    {user.map((items) => (
        <div className="user"  key={items}>{items.Name} &nbsp;&nbsp;&nbsp; {items.Quantity} &nbsp;&nbsp; {items.Price} </div>
      ))}
   </div>
  )
}

export default AddToCart;
