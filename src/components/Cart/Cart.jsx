import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h1>No hay películas en el carrito</h1>
        <Link to="/" className="Option">
          Películas
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <CartItem item={item} />
        </div>
      ))}
      <h3>Total: ${isNaN(total()) ? 0 : total()}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;