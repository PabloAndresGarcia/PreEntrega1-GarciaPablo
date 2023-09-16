import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const[quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }


    return (
        <article className='CardItem bg-secondary-100 m-5 p-8 rounded-xl'>
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
            <footer className='ItemFooter text-primary bg-secondary-900 rounded-lg mt-4 hover:bg-secondary-700 flex items-center justify-center'>
                {
                    quantityAdded > 0 ? (
                            <Link to = '/cart' className=''> Terminar compra </Link>
                        ) : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;