import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const[quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }


    return (
        <div className='bg-secondary-100 m-5 p-8 rounded-xl items-center'>
            <header className='Header flex items-center justify-center'>
                <h2 className='ItemHeader text-2xm uppercase font-bold tracking-[3px] text-primary mb-3'>
                    {name}
                </h2>
            </header>
            <picture className='flex items-center justify-center py-2 px-4 gap-4 rounded-full mb-8'>
                <img src={img} alt={name} className='ItemImg h-10 w-10' />
            </picture>
            <section className='text-primary'>
                <p className='Info flex items-center justify-center'>
                    Categoria: {category}
                </p>
                <p className='Info flex items-center justify-center'>
                    Descripción: {description}
                </p>
                <p className='Info flex items-center justify-center'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='flex ItemFooter mt-4 items-center justify-center'>
            
                {
                    quantityAdded > 0 ? (
                        
                        <Link to = '/cart' className='flex m-2 p-2 pr-4 pl-4 rounded-xl text-xl font-bold text-secondary-900 bg-primary hover:text-primary hover:bg-secondary-900 items-center justify-center'> Terminar compra </Link>
                        ) : (<ItemCount initial={1} stock={stock} onAdd={ handleOnAdd } />
                        )
                       
                    }
            </footer>
        </div>
    )
}

export default ItemDetail;