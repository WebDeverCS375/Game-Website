import React from 'react'
import "./home.css"

const HomeItem = ({ item , id}) => {
  return (
    <div className='item' id={id}>
        <button className='itemBox' id="merchanBox"><img src={item.image} height={200} width={200} /></button>
        <p>{item.name}</p>
    </div>
  )
}

export default HomeItem
