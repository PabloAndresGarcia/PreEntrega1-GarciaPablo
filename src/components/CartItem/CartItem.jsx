import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({id, name, quantity, price}) => {

    const { removeItem, cartUpdated } = useContext(CartContext)

    return(
        <div className="bg-secondary-100  m-5 p-8 rounded-xl grid grid-cols-3 gap-4">
            <header className="Header items-center justify-center">
                <h2 className="ItemHeader text-2xm uppercase font-bold tracking-[3px] text-primary mb-3">
                    {name}
                </h2>
            </header>
            <section className='text-primary flex gap-5'>
                <p className="Info flex items-center justify-center">
                    Precio: ${price}
                </p>
                <p className="Info flex items-center justify-center">
                    Cantidad: {quantity}
                </p>
            </section>            
            <footer className="ItemFooter text-primary bg-secondary-900 rounded-lg mt-4 hover:bg-secondary-700 flex items-center justify-center">
                <button onClick={() => removeItem(id)}> x </button>
            </footer>
        </div>
        
    )
}

export default CartItem