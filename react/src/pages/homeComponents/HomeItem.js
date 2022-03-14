import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const HomeItem = ({ item, id }) => {
  return (
    <div className='item' id={id}>
      <Link to={`/info/${item.id}`} className='itemBox' id="merchanBox"><img src={item.image} alt={item.name} height={200} width={200} /></Link>
      <p>{item.name}</p>
    </div>
  )
}

export default HomeItem