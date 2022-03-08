import React, { Component } from 'react'
import Select from 'react-select'
import "./home.css"
import { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import axios from "axios";

const HomeSearchBox = ({setItems}) => {
    const [text, setText] = useState('')
    const [filterValue, setFilterValue] = useState('');
    const options = [
        { value: '', label: 'None' },
        { value: 'A', label: 'Digital' },
        { value: 'B', label: 'Physical Card' }
      ];

    const search = () => {
        axios.get('http://localhost:3001/searchmerch', {
            params: {
            name : text,
            category : filterValue
            }
        }).then((response) => {
            setItems(response.data);
        });
    }

  return (
    <div className='titleBox' style={{marginLeft:'50px'}}>
        <form className='titleBox' style={{width:'90%'}} 
        onSubmit={(e) => {e.preventDefault()}}>
            <input
            type='text'
            placeholder='Search'
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{width:'70%'}}
            />
           <button onClick={search}>
               <FaSearch />
            </button>
            <div style={{width: '60%'}}>
                <Select options={options} onChange={(e) => setFilterValue(e.value)}/>
            </div>

        </form>
    </div>
  )
}

export default HomeSearchBox
