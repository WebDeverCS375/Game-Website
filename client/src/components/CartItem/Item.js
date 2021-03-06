import Button from '@material-ui/core/Button';
//Styles
import { Wrapper } from './Item.styles'

const Item = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.game_name}</h3>
            <div className="information">
                <p>Price: ${item.unit_price}</p>
                <p>Total: ${(item.amount * item.unit_price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.product_id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)}
                >
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.name} />
    </Wrapper>
)




export default Item