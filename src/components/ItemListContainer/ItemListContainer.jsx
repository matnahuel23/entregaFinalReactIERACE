import './ItemListContainer.css'
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/fireBaseConfig";
import ReactLoading from "react-loading"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "producto"), where("category", "==", categoryId))
      : collection(db, "producto");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
  <div id="presentacion">
      <h1>{greeting}</h1>
      {
        loading ? (
        <div className='Carga'>
            <ReactLoading  type="spin" color="#000" height={100} width={100} />
            <h1 style={{ marginTop: '20px' }}>Cargando</h1>
        </div>) 
        : (<ItemList producto={products} />)
      }
    </div>
  )
};

export default ItemListContainer;
