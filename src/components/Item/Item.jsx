import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return(
        <div className="CardItem bg-secondary-100 m-5 p-8 rounded-xl">
            <header className="Header flex items-center justify-center">
                <h2 className="ItemHeader text-2xm uppercase font-bold tracking-[3px] text-primary mb-3">
                    {name}
                </h2>
            </header>
            <picture className='flex items-center justify-center py-2 px-4 gap-4 rounded-full mb-8'>
                <img src={img} alt={name} className="ItemImg h-12 w-12" />
            </picture>
            <section className='text-primary'>
                <p className="Info flex items-center justify-center">
                    Precio: ${price}
                </p>
                <p className="Info flex items-center justify-center">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter text-primary bg-secondary-900 rounded-lg mt-4 hover:bg-secondary-700 flex items-center justify-center">
                <Link to={`/item/${id}`} className='Option'> Ver detalle </Link>
            </footer>
        </div>
    )
}

export default Item