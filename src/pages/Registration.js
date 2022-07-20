import './index.css';
import React from 'react';
import db from '../config'
import { useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';

function Registration() {
    const [userName, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    let navigate = useNavigate()
    const Register = () => {
      console.log("aaa")
        set(ref(db, '/users/' + userName), {
            name: userName,
            email: email,
            password: password,
            items: [],
            cartitems: []
        });
        console.log('DATA SAVED');
        Channel()
      }
  
      const Channel = () => {
          navigate({
              pathname: '/login',
              //    search: `?email=${encryptEmail(this.state.email)}`
              // search: `?name=${name}`
          });
      }


  return (
   <div className='centerBox'>
    <p className='centerBox_title'>Regestraion</p>
    <input className='input_field' placeholder="User name" onChange={(event) => {setUserName(event.target.value)}}/>
    <input className='input_field' placeholder="Enter Email"  onChange={(event) => {setEmail(event.target.value)}}/>
    <input className='input_field' placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/>
    <button className='button' onClick={()=>Register()}>Regestraion</button>
   </div>
  )
}

export default Registration;
