import React from 'react'
import "./home.css"
import HomeItemCollection from './HomeItemCollection'

const HomeItemTable = ({ items }) => {
  return (
    <div className='itemOuterBox'>
        <HomeItemCollection items={items}/>
        <button className='pageTurn'>Previous Page</button>
        <button className='pageTurn'>Next Page</button>
    </div>
  )
}

export default HomeItemTable
