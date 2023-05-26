import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  return (
    <div className="CartItem">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      <button onClick={handleRemoveItem}>Eliminar producto</button>
    </div>
  );
};

export default CartItem;
