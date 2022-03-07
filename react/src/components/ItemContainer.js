import React from 'react'
import { useFetch } from "react-async"
import Item from './Item'
import '../css/Item.css'

let items = []

const ItemContainer = (props)=>{
    let {data, error} = useFetch('http://localhost:3001/all', {
        headers: { accept: "application/json" },
    })

    function changeItem(id, name, price, quantity) {
        let dataObj = {id: id, name: name, price: price, quantity: quantity}
        console.log(JSON.stringify(dataObj))
        fetch('http://localhost:3001/updateItem', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(dataObj)
        }).then(response=>{
            props.refresh()

        })
        


    }

    function deleteItem(id) {
        fetch('http://localhost:3001/deleteItem/'+id,{
            method: 'DELETE'
        }).then(response=>{
            props.refresh()

        })
    }

    if(data){
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
                {
                    data.map((item, index) => {
                        return <Item key={index} index={item.id} name={item.name} price={item.price} quantity={item.quantity} changeHandler={changeItem} deleteHandler={deleteItem} />
                    })

                }
                    
            </tbody>
        </table>
    )}else{
        return <p>Error</p>
    }
    
    
}


export default ItemContainer