import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/fireBaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();
    const docRef = doc(db, "productos", itemId);

    useEffect(() => {
        getDoc(docRef)
            .then(response => {
                const data = response.data();
                setProduct ({ id: response.id, ...data })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {
                loading ? (<p>Cargando...</p>) : (<ItemDetail producto={product} />)
            }
        </div>
    )
}

export default ItemDetailContainer;
