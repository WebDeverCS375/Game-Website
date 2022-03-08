import React from 'react'
import "./home.css"
import HomeItemCollection from './HomeItemCollection'

const HomeItemTable = ({ items , page , setPage}) => {  
  return (
    <div className='itemOuterBox'>
        <HomeItemCollection items={items}/>
        <button className='pageTurn' onClick={() => page === 1 ? 0 :setPage(page - 1)}>Previous Page</button>
        {page}
        <button className='pageTurn' onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  )
}

export default HomeItemTable
