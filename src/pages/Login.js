import './index.css';
import React, { useEffect } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database'
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  let navigate = useNavigate()

  const Login_user = () => {
     const dbRef = ref(getDatabase());
     get(child(dbRef, `/users/` + userName)).then((snapshot) => {
        if (snapshot.exists()) {
           let pass = snapshot.val().password
           console.log(pass);

           if (pass == password) {
              console.log("Validate")
              sessionStorage.setItem("Login_name", userName)
              navigate({
                 pathname: '/selectItems',
                 // search: `?email=${encryptEmail(this.state.email)}`
               //   search: `?name=${userName}`
              });
           }
           else {
              console.log("not validate")
           }

           console.log("Data available");



        } else {
           console.log("No data available");
        }
     }).catch((error) => {
        console.error(error);
     });
  }


  return (
   <div className='centerBox'>
    <p className='centerBox_title'>Login</p>
    <input className='input_field' placeholder="Enter Name"  onChange={(event) => {setUserName(event.target.value)}}/>
    <input className='input_field' placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/>
    <button className='button' onClick={()=>Login_user()}>Login</button>
   </div>
  )
}

export default Login;
