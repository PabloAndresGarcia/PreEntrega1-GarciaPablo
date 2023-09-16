import React from 'react';
import thor from './Assets/thor.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar flex bg-secondary-100 items-center justify-center gap-10">
     <Link to='/'>
      <img className=' logo w-20 h-20' src={thor} alt="Cart Icon" />
      </Link>
      <div className="nav-list flex gap-5 text-2xl uppercase font-bold tracking-[1px] text-primary items-center">
        <NavLink to={`/category/remera`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}> Remeras</NavLink>
        <NavLink to={`/category/pantalon`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>Pantalones</NavLink> 
        <NavLink to={`/category/zapatillas`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}> Zapatillas </NavLink>
        <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}> Accesorios </NavLink>    
       </div>
      <CartWidget className='CartWidget'/>
    </nav>
  );
};

export default Navbar;