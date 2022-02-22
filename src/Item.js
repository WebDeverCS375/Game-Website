import './Item.css'

function Item(props) {
    return (
        <div className='Item'>
            <table>
                <tr>
                    <td id="name">Item Name</td>
                    <td id="id">{props.idName}</td>
                    <td id="edit">EDIT</td>
                    <td id="delete">DELETE</td>
                    <td id="price">$9.99</td>

                </tr>
            </table>
        </div>
    )
}