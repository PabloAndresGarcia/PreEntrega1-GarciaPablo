import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({id, name, quantity, price}) => {

    const { removeItem, cartUpdated } = useContext(CartContext)

    return(
        <div className="bg-secondary-100  m-5 p-8 rounded-xl grid grid-cols-3 gap-4">
            <header className="items-center justify-center">
                <h2 className="text-2xm uppercase font-bold tracking-[3px] text-primary">
                    {name}
                </h2>
            </header>
            <section className='text-primary flex gap-10 justify-center items-center'>
                <p className="Info font-bold">
                    Precio: ${price}
                </p>
                <p className="Info font-bold">
                    Cantidad: {quantity}
                </p>
            </section>            
            <footer className='flex items-center justify-center'>
                <button onClick={() => removeItem(id)} className="pl-7 pr-7 font-bold text-primary bg-secondary-900 rounded-lg mt-4 hover:bg-secondary-700 items-center justify-center"> x </button>
            </footer>
        </div>
    ) 
}

export default CartItem