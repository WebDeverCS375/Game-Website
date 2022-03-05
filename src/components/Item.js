import React from 'react'
import '../css/Item.css'

const Item = (props)=>{
    
    return (
        <tr className="Item">
            <td id="name">{props.name}</td>
            <td id="price">${parseFloat(props.price).toFixed(2)}</td>
            <td id="quantity">{parseInt(props.quantity)}</td>
            <td id="edit"><button className="button">EDIT</button></td>
            <td id="delete"><button className="button">DELETE</button></td>

        </tr>
        
    )
    
}


Item.defaultProps = {
    quantity: 0,
    price: 0
}


export default Item