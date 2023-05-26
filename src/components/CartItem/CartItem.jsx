import Item from '../Item/Item'
import './CartItem.css'

const CartItem =({items}) => {
    return (
        <div className='ListGroup'>
            {/* lista productos */}
            {items.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default CartItem