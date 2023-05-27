import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

let subtotal=0;
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  subtotal= item.price * item.quantity;
  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  return (
    <div className="CartItem">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${subtotal}</p>
      <button onClick={handleRemoveItem}>Eliminar producto</button>
    </div>
  );
};

export default CartItem;
