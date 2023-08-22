import React from 'react';
import thor from './Assets/thor.png'
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
      <img className='logo' src={thor} alt="Cart Icon" />
      </div>
      <div>
      <ul className="nav-list">
        <li><a href="#Remeras">Remeras</a></li>
        <li><a href="#Pantalones">Pantalones</a></li>
        <li><a href="#Buzoz y camperas">Buzoz y camperas</a></li>
        <li><a href="#Accesorios">Accesorios</a></li>
        <CartWidget className='CartWidget'/>
      </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;