/* import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/fireBaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
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
                loading ? (<p>Cargando...</p>) : (<ItemDetail {...product} />)
            }
        </div>
    )
}

export default ItemDetailContainer;
 */

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount'
import { CartContext} from '../../context/CartContext'
import "./ItemDetailContainer.css"

import ItemDetail from '../ItemDetail/ItemDetail'

  const ItemDetailContainer = ({ selected }) => {
  const { state } = useLocation();
  const { image,name,description,stock, price} = state;
  const { addProduct } = useContext(CartContext);

  const handlerCount = (count) => {
    addProduct(count);
  };

/*   const handlerAddOrder = (count) => {
    const item = {
      name: title,
      price: price,
      total: count * price,
    };

    createOrder(item).then((result) => {
      alert(`Se ha generadop la orden ${result}`);
      console.log(result);
    });
  }; */

/*   const handlerUpdateOrder = () => {
    updateBatchOrders();
    alert("Actualizado");
  }; */

  return (
    <div className="item-detail">
      <h1>{name}</h1>
      <div>
        <img src={image} width={300} height={300} />
      </div>
      <div>
        <p>Descripcion: {description}</p>
      </div>
      <div>Precio: {price}</div>
     {/*  <ItemCount
        onChangeCount={(e) => handlerCount(e)}
        onClickAddCart={(e) => handlerAddOrder(e)}
        onClickUpdateCart={(e) => handlerUpdateOrder(e)}
        maxCount={stock}
        className={"item-detail__item-count"}
      /> */}
    </div>
  );
};

export default ItemDetailContainer;
