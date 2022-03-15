import React from 'react'
import { useState } from 'react'
import './home.css'

function Modal({ setModal}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [logAuthStatus, setLogAuthStatus] = useState("Close");

  const register = () => {
    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        plaintextPassword: password,
      })
    }).then(function (response) {
      if (response.status === 200) {
        setLogAuthStatus("Success");
        console.log("Success");
      } else {
        console.log("Failure");
      }
    });
  };

  const login = () => {
    fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        plaintextPassword: password,
      })
    }).then(function (response) {
      if (response.status === 200) {
        setLogAuthStatus("Success");
        console.log("Success");
      } else {
        console.log("Failure");
      }
    });
  };


  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='regiLog'>
              <h1>Create Account</h1>
              <label>Username</label>
              <input className='regLogInput'
               type="text"
               onChange={(e) => {
                 setUsername(e.target.value);
               }}
              />
              <label>Password</label>
              <input className='regLogInput'
               type="password"
               onChange={(e) => {
                 setPassword(e.target.value);
               }}
              />
              <button 
                className='btn'
                style={{ width: '20%' }}
                onClick={() => {register()}}
                >Create</button>
            </div>
            <div className='regiLog'>
              <h1>Login</h1>
              <label>Username</label>
              <input className='regLogInput'
               type="text"
               onChange={(e) => {
                 setUsername(e.target.value);
               }}
              />
              <label>Password</label>
              <input className='regLogInput'
               type="password"
               onChange={(e) => {
                 setPassword(e.target.value);
               }}
              />
              <button 
                className='btn'
                style={{ width: '20%' }}
                onClick={(e) => {login()}}
              >Login</button>
            </div>
            
            <div className='regiLog'>
              <button className='btn'
              style={{ width: '50%' , margin: '50px'}}
              onClick={() => {
                setModal(false);
                setLogAuthStatus("Close");
              }}
              >{logAuthStatus}</button>
            </div>
        </div>
    </div>
  )
}

export default Modal