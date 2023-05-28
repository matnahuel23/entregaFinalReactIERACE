import './ItemCount.css';
import {useState} from 'react';
import restIcon from './iconos/restar.svg';
import sumIcon from './iconos/sumar.svg'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity < stock){
            setQuantity (quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>
                <img src={restIcon} alt="Restar" className="Icon" />
                </button>
                <h3 className='Number'>{quantity}</h3>
                <button className='Button' onClick={increment}>
                <img src={sumIcon} alt="Sumar" className="Icon" />
                </button>
            </div>
            <div>
                <button className='Button' class="btn btn-primary btn-lg" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    AGREGAR
                </button>
            </div>
        </div>
    )
}

export default ItemCount