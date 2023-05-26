import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from '../Item/Item';

const CartItem = ({ id, image, name, description, stock, price, category, duration }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="CartItem">
      <Item
        image={image}
        name={name}
        description={description}
        stock={stock}
        price={price}
        category={category}
        duration={duration}
      />
      <button onClick={handleRemoveItem}>Eliminar producto</button>
    </div>
  );
};

export default CartItem
