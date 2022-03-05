import React, { Component } from 'react'
import Select from 'react-select'
import "./home.css"
import { useState } from 'react'
import { FaSearch } from "react-icons/fa"

const HomeSearchBox = () => {
    const [text, setText] = useState('')
    const options = [
        { value: 'digital', label: 'Digital' },
        { value: 'Physical_Card', label: 'Physical Card' }
      ]
  return (
    <div className='titleBox' style={{marginLeft:'50px'}}>
        <form className='titleBox' style={{width:'90%'}}>
            <input
            type='text'
            placeholder='Search'
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{width:'70%'}}
            />
           <button>
               <FaSearch />
            </button>
            <div style={{width: '60%'}}>
                <Select options={options}/>
            </div>

        </form>
    </div>
  )
}

export default HomeSearchBox
