import React, { useEffect, useState } from 'react';
import { useFetch } from "react-async"
import Item from '../components/Item'
import ItemContainer from '../components/ItemContainer'
import '../css/seller.css'

let items = [
    {
        name: "Mario Party Superstars",
        price: 59.99,
        quantity: 10
    },
    {
        name: "Mario Kart 8",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Red",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Blue",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Yellow",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Green",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Silver",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Gold",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Crystal",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Ruby",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Sapphire",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Emerald",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Diamond",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Pearl",
        price: 59.99,
        quantity: 20
    },
    {
        name: "Pokemon Platinum",
        price: 59.99,
        quantity: 20
    }
]





const Seller = () => {
    

    const [containerKey, setContainerKey] = useState(1);
    const refreshContainer = () =>{
        setContainerKey(containerKey + 1)
        
    };

    useEffect(() => {
        
        // Update the document title using the browser API
        document.getElementById("form").oninput = () => {
            let input = document.getElementById("search");
            let filter = input.value.toUpperCase();
            let table = document.getElementById("table");
            let tr = table.getElementsByTagName("tr");

            for (let i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    let txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

        document.getElementById("form").onreset = () => {
            let table = document.getElementById("table");
            let tr = table.getElementsByTagName("tr");

            for (let i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    tr[i].style.display = "";
                }
            }
        }

        // document.getElementById("saveButton").onclick = () => {
        //     console.log(document.getElementById("nameInput").value)
        //     console.log(document.getElementById("priceInput").value)
        //     console.log(document.getElementById("quantityInput").value)
        // }

    });
    
        // '{"id":"1", "name":"Mario Party","price":"59.99", "quantity": "50"}'
    

    

    



    

    return (
        <div id="body">
            <h1>Seller</h1>
            <form id="form" onSubmit={(e) => { e.preventDefault() }}>
                <input type="search" id="search" name="search" placeholder="Search"></input>
            </form>

            <ItemContainer id="container" key={containerKey} refresh={refreshContainer}>
        
            {
                
            }
                    
                
            </ItemContainer>








        </div>

    )

    

}


export default Seller