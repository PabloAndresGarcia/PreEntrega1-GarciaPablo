import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {

    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if( totalQuantity === 0) {
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Ver roductos</Link>
            </div>
        )
    }

  return (
    <div>
        { cart.map(p=> <CartItem key={p.id} {...p}/>) }
        <h3 className='flex text-xl font-bold text-primary items-center justify-center' >Total: ${total}</h3>
        <button onClick={() => clearCart()} className='flex text-xl font-bold text-primary items-center justify-center'>Limpiar carrito</button>
        <Link to='/checkout' className='flex text-xl font-bold text-primary items-center justify-center'>Checkout</Link>
    </div>
  )
}

export default Cart