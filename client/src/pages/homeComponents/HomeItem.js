import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'

const HomeItem = ({ item, id }) => {

  let imgStyle = {
    width: 'minContent',
    height: '200px',
    maxWidth: '200px',

  }

  return (
    <div className='item' id={id}>
      <Link className='itemBox' id="merchanBox" to={`/info/${item.product_id}`}><img src={item.image} style={imgStyle} /></Link>
      <div>
        <h2>{item.game_name}</h2>
        <h3>{item.game_genre}</h3>
        <h4>{item.game_console}</h4>
        <h5>{item.unit_price}</h5>
      </div>
    </div>
  )
}

export default HomeItem
