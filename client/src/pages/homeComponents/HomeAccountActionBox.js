import React, { Component } from 'react'
import './home.css'
import { FaShoppingCart } from "react-icons/fa"

const HomeAccountActionBox = ({ setModal }) => {
  return (
    <div>
      <div>
        <button className='btn'
          onClick={() => { setModal(true) }}
        >Create Account / Login</button>
      </div>
      <div><button className='btn'>Upload</button></div>

    </div>
  )
}

export default HomeAccountActionBox