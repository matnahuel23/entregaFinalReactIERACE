import { Link } from 'react-router-dom'
import './Item.css'

/* recibo las props con los datos */
const Item = ({image,name,description,stock, price, category,duration,id}) => {
    return (
        <article className='CardItem' class="card">
            <section className='Information'>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} state={{image,name,description,stock, price, category,duration,id}} className='Option'>
                {name}
                </Link>
            </footer>
        </article>
    )
}

export default Item