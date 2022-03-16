import React, { useEffect, useState } from 'react';
import '../css/upload.css'
import CurrencyInput from 'react-currency-input-field';
import Select from 'react-select';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core';
import axios from 'axios';

let genreOptions = [
    { value: 'Action', label: 'Action' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Party', label: 'Party' },
    { value: 'Puzzle', label: 'Puzzle' }
]

let consoleOptions = [
    { value: 'Nintendo', label: 'Nintendo' },
    { value: 'Playstation', label: 'Playstation' },
    { value: 'Xbox', label: 'Xbox' },
]

function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = theEvent.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

const Input = styled('input')({
    display: 'none',
});


let unit_price = 1

const Upload = () => {

    const [file, setFile] = useState()
    const [fileLink, setFileLink] = useState()
    const [selectedConsole, setConsole] = useState({})
    const [selectedGenre, setGenre] = useState({})


    useEffect(() => {

    })

    return (
        <div className='uploadBody'>
            <form id="uploadForm" className='uploadForm' onSubmit={(e) => {
                e.preventDefault()
                let game_name = document.getElementById('nameInput').value

                let gameItem = {
                    game_name,
                    unit_price,
                    game_console: selectedConsole,
                    game_genre: selectedGenre
                }

                axios.post('http://localhost:3001/upload', gameItem).then(async (response) => {
                    // setId(response.data.id)
                    document.getElementsByClassName('uploadForm')[0].reset()
                    setGenre({})
                    setConsole({})

                    var formData = new FormData();
                    formData.append("file", file);
                    formData.append("id", response.data.insertId)
                    axios.post('http://localhost:3001/uploadImage', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })

                })




            }}>
                <div className='imageField'>
                    <div className='image'>
                        <label htmlFor="imageUpload"><img className="pic" src={fileLink}></img></label>
                    </div>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/jpeg" id="contained-button-file" multiple type="file" onChange={(event) => { setFile(event.target.files[0]); setFileLink(URL.createObjectURL(event.target.files[0])) }} />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>

                </div>
                <div className='fieldInput'>
                    <label htmlFor="nameInput">Name: </label>
                    <input required id="nameInput" size={50} maxLength={16}></input>
                    <label htmlFor="priceInput">Price: </label>
                    <CurrencyInput
                        id="priceInput"
                        placeholder="Please enter a number"
                        defaultValue={1.0}
                        decimalsLimit={2}
                        prefix='$'
                        allowNegativeValue={false}
                        onValueChange={(p) => { unit_price = p }}
                    />

                    <label className="editLabel">Genre: </label>
                    <Select
                        id="genreSelector"
                        value={selectedGenre}
                        options={genreOptions}
                        placeholder="Select Genre..."
                        onChange={(option) => setGenre(option)}
                    ></Select>


                    <label className="editLabel">Console: </label>
                    <Select
                        id="consoleSelector"
                        value={selectedConsole}

                        options={consoleOptions}
                        placeholder="Select Console..."
                        onChange={(option) => setConsole(option)}
                    ></Select>
                    <Button variant="contained" type="submit" >Submit</Button>
                </div>
            </form>
        </div >
    );

};

export default Upload;

