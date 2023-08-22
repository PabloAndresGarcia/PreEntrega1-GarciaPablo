import React from 'react';
import CartIcon from './assets/CartIcon.png'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img className='cart-icon' src={CartIcon} alt="Cart Icon" />
      <span className="notification">5</span>
    </div>
  );
};

export default CartWidget;