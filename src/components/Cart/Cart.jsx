import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const navigate = useNavigate();
  const [carritoVacio, setCarritoVacio] = useState(false);

  const handleClearCart = () => {
    const confirmClear = window.confirm("¿Estás seguro de que deseas vaciar el carrito?");

    if (confirmClear) {
      clearCart();
      setCarritoVacio(true);
    }
  };

  useEffect(() => {
    if (carritoVacio) {
      navigate('/');
    } 
    if (!cart || cart.length === 0) {
      alert("Sin películas");
        navigate('/');
    }
  }, [cart, navigate]);

  return (
    <div id="compraLista">
      {cart.map((item) => (
        <div id="cadaCompra" key={item.id}>
          <CartItem item={item} />
        </div>
      ))}
      <div id="ventaPagar">
      <h3>Total: ${isNaN(total()) ? 0 : total()}</h3>
      <div className="botonera">
        <button onClick={handleClearCart} className="Button ButtonLink" type="button" class="btn btn-danger">
          Vaciar carrito
        </button>
        <Link to="/" className="Option ButtonLink" type="button" class="btn btn-info">
          Seguir comprando
        </Link>
        <Link to="/checkout" className="Option ButtonLink" type="button" class="btn btn-success">
          Pagar
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;