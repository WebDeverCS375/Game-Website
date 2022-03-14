import React from 'react'
import "./home.css"
import HomeItem from './HomeItem'

const HomeItemCollection = ({ items }) => {
  return (
    <div className='titleBox'>
    {items.map((item) => (
        <HomeItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default HomeItemCollection
