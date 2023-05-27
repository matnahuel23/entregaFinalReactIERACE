import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  const handleClearCart = () => {
    const confirmClear = window.confirm("¿Estás seguro de que deseas vaciar el carrito?");

    if (confirmClear) {
      clearCart();
    }
  };

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
      <div className="botonera">
        <button onClick={handleClearCart} className="Button ButtonLink">
          Vaciar carrito
        </button>
        <Link to="/" className="Option ButtonLink">
          Seguir comprando
        </Link>
        <Link to="/checkout" className="Option ButtonLink">
          Pagar
        </Link>
      </div>
    </div>
  );
};

export default Cart;