import React from 'react'
import HomeTitle from './HomeTitle'
import HomeAccountActionBox from './HomeAccountActionBox'
import HomeSearchBox from './HomeSearchBox'
import './home.css'

const HomeTitleBox = ({setItems}) => {
  return (
    <div>
        <div className='titleBox'>
        <HomeTitle />
        <HomeAccountActionBox />
        </div>
        <HomeSearchBox setItems={setItems}/>
    </div>
  )
}

export default HomeTitleBox
