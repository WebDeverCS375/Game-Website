import React from 'react'
import HomeTitle from './HomeTitle'
import HomeAccountActionBox from './HomeAccountActionBox'
import HomeSearchBox from './HomeSearchBox'
import './home.css'
import Modal from './Modal'

const HomeTitleBox = ({setItems, setLastMes , setModal, modal}) => {
  return (
    <div>
        <div className='titleBox'>
        <HomeTitle />
        <HomeAccountActionBox setModal={setModal}/>
        </div>
        {!modal && <HomeSearchBox setItems={setItems} setLastMes={setLastMes}/>}
    </div>
  )
}

export default HomeTitleBox
