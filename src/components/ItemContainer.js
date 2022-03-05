import React from 'react'
import '../css/Item.css'

const ItemContainer = (props)=>{
    
    return (
        <table id="table">
            <thead>
                <tr>
                    <th id="name">Name</th>
                    <th id="price">Price</th>
                    <th id="quantity">Quantity</th>
                    <th id="edit"></th>
                    <th id="delete"></th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
    
}


export default ItemContainer