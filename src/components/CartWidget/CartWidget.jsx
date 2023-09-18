import React, { useContext } from 'react';
import CartIcon from './assets/CartIcon.png'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className="cart-widget h-10 w-10 relative-left "  >
      <img className='cart-icon' src={CartIcon} alt="Cart Icon" />
      <span className="notification absolute top-3 pl-2 pr-2 text-white bg-primary rounded-3xl">{ totalQuantity }</span>
    </Link>
  );
};

export default CartWidget;