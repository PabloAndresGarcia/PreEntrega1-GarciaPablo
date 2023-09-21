import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {

    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if( totalQuantity === 0) {
        return(
            <div className=''>
                <h1 className='flex mt-10 text-xl font-bold text-primary items-center justify-center'>No hay items en el carrito</h1>
                <Link to='/' className='flex m-10 p-1 rounded-xl text-xl font-bold text-secondary-900 bg-primary hover:text-primary hover:bg-secondary-700 items-center justify-center'>Ver productos</Link>
            </div>
        )
    }

  return (
    <div className='wrapper grid'>
        { cart.map(p=> <CartItem key={p.id} {...p}/>) }
        <h3 className='flex text-xl font-bold text-primary items-center justify-center' >Total: ${total}</h3>
        <button className='flex m-10 p-1 rounded-xl text-xl font-bold text-secondary-900 bg-primary hover:text-primary hover:bg-secondary-100 items-center justify-center' onClick={() => clearCart()} >Limpiar carrito</button>
        <Link to='/checkout' className='flex m-5 p-1 rounded-xl text-xl font-bold text-secondary-900 bg-primary hover:text-primary hover:bg-secondary-100 items-center justify-center'>Checkout</Link>
    </div>
  )
}

export default Cart