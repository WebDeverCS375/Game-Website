import React from 'react'
import "./home.css"

const HomeItem = ({ item }) => {
  return (
    <div className='item'>
        <button className='itemBox'>{item}</button>
    </div>
  )
}

export default HomeItem
