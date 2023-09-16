import React from 'react';
import CartIcon from './assets/CartIcon.png'

const CartWidget = () => {
  return (
    <div className="cart-widget h-10 w-10 relative-left">
      <img className='cart-icon' src={CartIcon} alt="Cart Icon" />
      <span className="notification absolute top-3 pl-2 pr-2 text-white bg-primary rounded-3xl">5</span>
    </div>
  );
};

export default CartWidget;