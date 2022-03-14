import React from 'react'
import HomeTitle from './HomeTitle'
import HomeAccountActionBox from './HomeAccountActionBox'
import HomeSearchBox from './HomeSearchBox'
import './home.css'

const HomeTitleBox = ({setItems, setLastMes}) => {
  return (
    <div>
        <div className='titleBox'>
        <HomeTitle />
        <HomeAccountActionBox />
        </div>
        <HomeSearchBox setItems={setItems} setLastMes={setLastMes}/>
    </div>
  )
}

export default HomeTitleBox
