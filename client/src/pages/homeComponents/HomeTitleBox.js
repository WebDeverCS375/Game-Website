import React from 'react'
import HomeTitle from './HomeTitle'
import HomeAccountActionBox from './HomeAccountActionBox'
import HomeSearchBox from './HomeSearchBox'
import './home.css'

const HomeTitleBox = () => {
  return (
    <div>
        <div className='titleBox'>
        <HomeTitle />
        <HomeAccountActionBox />
        </div>
        <HomeSearchBox />
    </div>
  )
}

export default HomeTitleBox
