import React from 'react'
import './infoComponents/info.css'

function Info() {

  return (
    <>
    <div>
        <h1>Title</h1>
        <p>This is the description, this is a test to see how the description will look when actually on the info page.</p>
        <div className='imageBox'>
            image placeholder
        </div>

        <div className='tagsBox'> 
            <div className='smallBox'>
                category placeholder
            </div>
            <div className='smallBox'>
                price placeholder
            </div>
            <button className='cart'>
                Add to Cart
            </button>
        </div>
        
    </div>
    </>
  )
}

export default Info