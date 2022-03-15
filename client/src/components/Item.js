import React from 'react'
import '../css/Item.css'

class Item extends React.Component {
    render() {
        return (
            <div className='Item'>
                <table>
                    <tbody>
                        <tr>
                            <td id="name">{this.props.name}</td>
                            <td id="edit"><button className="button">EDIT</button></td>
                            <td id="delete"><button className="button">DELETE</button></td>
                            <td id="price">{this.props.price}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Item