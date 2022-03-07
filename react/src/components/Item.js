import React from 'react'
import '../css/Item.css'
import Popup from 'reactjs-popup'
import '../css/popup.css'

const Item = (props) => {



    return (
        <tr className="Item">
            <td id="name">{props.name}</td>
            <td id="price">${parseFloat(props.price).toFixed(2)}</td>
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
                                        <div><label className="editLabel">Name: </label><input id="nameInput" className="editInput" type="text" defaultValue={props.name}></input></div>


                                        <div><label className="editLabel">Price: </label><input id="priceInput" className="editInput" type="text" defaultValue={props.price}></input></div>

                                        <div><label className="editLabel">Quantity: </label><input id="quantityInput" className="editInput" type="text" defaultValue={props.quantity}></input></div>
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

                                        props.changeHandler(props.index, name, price, quantity)

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
                                        props.deleteHandler(props.index)

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