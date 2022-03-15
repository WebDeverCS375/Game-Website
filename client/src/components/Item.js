import React from 'react'
import '../css/Item.css'
import Popup from 'reactjs-popup'
import '../css/popup.css'
import Select from 'react-select';


let options = [
    {value:'Action',label:'Action'},
    {value:'Adventure', label:'Adventure'},
    {value:'Party',label:'Party'},
    {value:'Puzzle',label:'Puzzle'}
]


const Item = (props) => {

    let selectedGenre = {value:props.item.game_genre, label:props.item.game_genre}

    let imgStyle = {
        width: '100px',
        maxHeight: '100px'
    }

    return (
        <tr className="Item">
            <td id="image"><img style={imgStyle} src={props.item.image} alt={props.game_name}></img></td>

            <td id="name">{props.item.game_name}</td>
            <td id="price">${parseFloat(props.item.unit_price).toFixed(2)}</td>
            <td id="genre">{props.item.game_genre}</td>
            <td id="quantity">{parseInt(props.quantity)}</td>
            <td id="edit">
                <Popup trigger={<button className="button"> EDIT </button>} modal>
                    {close => (
                        <div className="modal">
                            <div className="header">
                                Edit
                            </div>
                            <div className="content">
                                <span>
                                    <form onSubmit={(e) => {
                                        e.preventDefault()

                                    }}>
                                        <div><label className="editLabel">Name: </label><input id="nameInput" className="editInput" type="text" defaultValue={props.item.game_name}></input></div>


                                        <div><label className="editLabel">Price: </label><input id="priceInput" className="editInput" type="text" defaultValue={props.item.unit_price}></input></div>

                                        <div><label className="editLabel">Quantity: </label><input id="quantityInput" className="editInput" type="text" defaultValue={props.quantity}></input></div>
                                        
                                        <div><label className="editLabel">Genre: </label>
                                            <Select
                                                id="genreSelector"
                                                value={options.value}
                                                options={options}
                                                defaultValue={selectedGenre}
                                                onChange={(option)=>selectedGenre=option}
                                            ></Select>
                                        </div>

                                        {/* <input type="file" accept="image/png, image/jpeg" /> */}
                                    </form>
                                </span>
                            </div>
                            <div className="actions">
                                <button
                                    className="button"
                                    onClick={() => {
                                        close();
                                    }}
                                >
                                    Close
                                </button>
                                <button
                                    className="button"
                                    id="saveButton"
                                    onClick={() => {
                                        let name = document.getElementById("nameInput").value
                                        let price = document.getElementById("priceInput").value
                                        let quantity = document.getElementById("quantityInput").value
                                        let genre = selectedGenre.value

                                        console.log(name, price, quantity, genre)

                                        // props.changeHandler(name, price, quantity)

                                        close();
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </div>)}
                </Popup></td>
            <td id="delete">
                <Popup trigger={<button className="button"> DELETE </button>} modal>
                    {close => (
                        <div className="modal">
                            <div className="header">
                                Are you sure you want to delete this item?
                            </div>
                            <div className="actions">
                                <button
                                    className="button"
                                    onClick={() => {

                                        close();
                                    }}
                                >
                                    No
                                </button>
                                <button
                                    className="button"
                                    onClick={() => {
                                        props.deleteHandler()

                                        close();
                                    }}
                                >
                                    Yes
                                </button>
                            </div>
                        </div>)}
                </Popup>
            </td>

        </tr>

    )

}


Item.defaultProps = {
    quantity: 0,
    price: 0
}


export default Item