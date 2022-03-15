import React from 'react'
import "./home.css"

const HomeItem = ({ item , id}) => {
  return (
    <div className='item' id={id}>
        <button className='itemBox' id="merchanBox"><img src={item.image} height={200} width={200} /></button>
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
