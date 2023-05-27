import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useLocation } from 'react-router-dom'
import { CartContext} from '../../context/CartContext'

const ItemDetail = () => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {state} = useLocation()
    const {id, name, image, category, description, price, stock}= state ;
    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            image, id, name, price, quantity
        }

        addItem (item, quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture className='ItemImagen'>
                <img src={image} alt={name} className='ItemImg'/>
            </picture>
            <section className='Information'>
                <p className='Info'>
                    Categoria = {category}
                </p>
                <p className='Info'>
                    Descripción = {description}
                </p>
                <p className='Info'>
                    Precio = $ {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <div>
                        <Link to ='/cart' className='Option ButtonLink'>
                            Terminar compra
                        </Link>
                        <Link to='/' className='Option ButtonLink'>
                            Seguir comprando
                        </Link>
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                    
                }
            </footer>
        </article>
    )
}

export default ItemDetail