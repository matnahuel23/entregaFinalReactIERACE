import './ItemList.css'
import Item from '../Item/Item'

const ItemList =({producto}) => {
    return (
        <div className='ListGroup'>
            {/* lista productos */}
            {producto.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList