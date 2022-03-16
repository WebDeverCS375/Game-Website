import React from 'react'
import './infoComponents/info.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useQuery, useQueryClient, useQueryErrorResetBoundary } from 'react-query'
import axios from "axios";

function Info({ addToCart }) {

    const queryClient = useQueryClient()
    const { id } = useParams();
    const { data, status } = useQuery('merch', async () => {
        return await axios.get('http://localhost:3001/merchinfor', {
            params: {
                id: id
            }
        });
    })

    useEffect(() => {
        if (status != 'loading' && status != 'error') {
            console.log(data.data[0]);

        }
    }, []);

    if (status == 'loading') {
        return <p>loading</p>
    }

    if (status == 'error') {
        return <p>error</p>
    }


    return (
        <>
            <div id="infobody">
                <h1>{data.data[0].game_name}</h1>
                <p>This is the description, this is a test to see how the description will look when actually on the info page.</p>
                <div className='imageBox'>
                    <img src={data.data[0].image} height={200} width={200} />
                </div>

                <div className='tagsBox'>
                    <div className='smallBox'>
                        {data.data[0].game_genre}
                    </div>
                    <div className='smallBox'>
                        ${data.data[0].unit_price}
                    </div>
                    <button className='cart' onClick={() => { addToCart(data.data[0]) }}>
                        Add to Cart
                    </button>
                </div>

            </div>
        </>
    )

}

export default Info