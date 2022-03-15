import React, { useEffect, } from 'react';
import ItemContainer from '../components/ItemContainer'
import '../css/seller.css'

const Seller = () => {

    useEffect(() => {

        // Update the document title using the browser API
        document.getElementById("form").oninput = () => {
            let input = document.getElementById("search");
            let filter = input.value.toUpperCase();
            let table = document.getElementById("table");
            let tr = table.getElementsByTagName("tr");

            for (let i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName("td")[1];
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
                let td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    tr[i].style.display = "";
                }
            }
        }

    });

    return (

        <div id="body">
            <h1>Seller</h1>
            <form id="form" onSubmit={(e) => { e.preventDefault() }}>
                <input type="search" id="search" name="search" placeholder="Search"></input>
            </form>
            <ItemContainer id="container" />
        </div>
    )
}

export default Seller