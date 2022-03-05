import React from 'react'
import "./home.css"

const HomeItem = ({ item , id}) => {
  return (
    <div className='item' id={id}>
        <button className='itemBox' id="merchanBox">{item.name}</button>
    </div>
  )
}

export default HomeItem
