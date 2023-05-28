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
      <h4>Precio: ${item.price}</h4>
      <h4>Cantidad: {item.quantity}</h4>
      <h4>Subtotal: ${subtotal}</h4>
      <button onClick={handleRemoveItem} type="button" class="btn btn-danger">Eliminar producto</button>
    </div>
  );
};

export default CartItem;
