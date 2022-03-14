import React from "react";
import axios from 'axios'
import {
    useQuery,
} from "react-query"
import { useParams } from "react-router-dom";

async function fetchItemById(id) {
    const response = await axios.get(`http://localhost:3001/item/${id}`)
    return response.data



}


const Info = (props) => {




    let { id } = useParams();

    const { data, status } = useQuery(['items', id], () => {
        return fetchItemById(id)
    })


    if (status === 'loading') {
        return <p>Loading...</p>
    }
    if (status === 'error') {
        return <p>Error!</p>
    }

    console.log(data)

    return <p>{ }</p>


}


export default Info;

