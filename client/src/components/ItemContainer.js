import React from 'react'
import axios from 'axios'
import {
    useQueryClient,
    useMutation,
    useQuery,
} from "react-query"
import Item from './Item'
import '../css/Item.css'

async function fetchItems() {
    const res = await fetch('http://localhost:3001/all')
    return res.json()
}

function changeItem(req) {
    return axios.post('http://localhost:3001/updateItem', req)


}

function deleteItem(id) {
    return axios.delete('http://localhost:3001/deleteItem/' + id)
}

const ItemContainer = (props) => {

    const queryClient = useQueryClient()

    const { data, status } = useQuery('items', fetchItems)

    // let { data, error } = useFetch('http://localhost:3001/all', {
    //     headers: { accept: "application/json" },
    // })

    const changeMutation = useMutation(changeItem, {
        onSuccess: () => {
            queryClient.invalidateQueries('items')
        }
    })

    const deleteMutation = useMutation(deleteItem, {
        onSuccess: () => {
            queryClient.invalidateQueries('items')
        }
    })

    if (status === 'loading') {
        return <p>Loading...</p>
    }
    if (status === 'error') {
        return <p>Error!</p>
    }



    return (
        <table id="table">
            <thead>
                <tr>
                    <th id="image">Image</th>
                    <th id="name">Name</th>
                    <th id="price">Price</th>
                    <th id="genre">Genre</th>
                    <th id="quantity">Quantity</th>
                    <th id="edit"></th>
                    <th id="delete"></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return <Item key={index} item={item} changeHandler={(name, price, quantity, genre) => changeMutation.mutate({ gameId: item.id, game_name: name, unit_price: price, quantity: quantity, game_genre:  genre})} deleteHandler={() => deleteMutation.mutate(item.id)} />
                    })

                }

            </tbody>
        </table>
    )



}


export default ItemContainer