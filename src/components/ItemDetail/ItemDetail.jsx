import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useLocation } from 'react-router-dom'
import { CartContext} from '../../context/CartContext'

const ItemDetail = () => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const {state} = useLocation();
    const {id, name, image, trailer, description, price, stock}= state ;
    const {addItem} = useContext (CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            image, id, name, price, quantity, trailer
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
            <div className='ItemTrailer'>
            <iframe
            width='560'
            height='315'
            src={trailer}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            ></iframe>
      </div>
            <section className='Information'>
                <p id="descrip" className='Info'>
                    Descripción: {description}
                </p>
                <p id="stock" className='Info'>
                    Stock disponible: {stock}
                </p>
                <p id="precio" className='Info'>
                    Precio: $ {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <div>
                        <Link to ='/cart' className='Option ButtonLink' class="btn btn-primary btn-lg">
                            Ir al carrito
                        </Link>
                        <Link to='/' className='Option ButtonLink' class="btn btn-primary btn-lg">
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