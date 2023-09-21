import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
    if(quantity < stock) {
        setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter m-3'>
            <div className='Controls text-primary flex items-center justify-center gap-5 text-2xl font-bold'>
                <button className='Button ' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                <button className=' flex m-2 p-1 rounded-xl text-xl font-bold text-secondary-900 bg-primary hover:text-primary hover:bg-secondary-900 items-center justify-center ' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount