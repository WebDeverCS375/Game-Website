import Item from "../CartItem/Item";
// Styles
import { Wrapper } from "./Cart.style";


const Cart = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items) => {
        return items.reduce((ack, item) => {
            return ack + item.unit_price * item.amount
        }, 0)
    }

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>

            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <Item
                    key={item.product_id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart