import React, { Component } from 'react'
import './home.css'
import { FaShoppingCart } from "react-icons/fa"

const HomeAccountActionBox = () => {
  return (
    <div>
        <div><button className='btn'>Create Account</button></div>
        <div><button className='btn'>Login</button></div>
        <div><button className='btn'>Upload</button></div>
        <div><button className='cart'><FaShoppingCart size={28}/></button></div>
    </div>
  )
}

export default HomeAccountActionBox
