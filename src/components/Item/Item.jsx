import { Link } from 'react-router-dom'
import './Item.css'

/* recibo las props con los datos */
const Item = ({id, name, img, price, stock}) => {
    return (
        <article className='CardItem' class="card">
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section className='Information'>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>
                    Ver detalle
                </Link>
            </footer>
        </article>
    )
}

export default Item