import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/fireBaseConfig'
import ReactLoading from "react-loading"

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
                loading ? (
                <div className='Carga'>
                    <ReactLoading  type="spin" color="#000" height={50} width={50} />
                    <h1 style={{ marginTop: '20px' }}>Cargando</h1>
                </div>) 
                : (<ItemDetail producto={product} />)
            }
        </div>
    )
}

export default ItemDetailContainer;
