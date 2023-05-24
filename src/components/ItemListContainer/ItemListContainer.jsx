import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/fireBaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [producto, setProducts] = useState([]);
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
  <div>
      <h1>{greeting}</h1>
      {loading ? <p>Cargando...</p> : <ItemList producto={producto} />}
    </div>
  )
};

export default ItemListContainer;
