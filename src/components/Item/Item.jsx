import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return(
        <div className="bg-secondary-100 m-5 p-8 rounded-xl max-h-full">
            <header className="flex items-center justify-center">
                <h2 className="text-2xm uppercase font-bold tracking-[3px] text-primary mb-3">
                    {name}
                </h2>
            </header>
            <picture className='relative items-center justify-center gap-4 '>
                <img src={img} alt={name} className="ItemImg w-full max-w-lg" />
            </picture>
            <section className='text-primary'>
                <p className="flex items-center justify-center">
                    Precio: ${price}
                </p>
                <p className="flex items-center justify-center">
                    Stock disponible: {stock}
                </p>
            </section>            
            <footer className="">
                <Link to={`/item/${id}`} className=' text-primary bg-secondary-900  hover:bg-primary hover:text-secondary-100 rounded-lg mt-4 flex items-center justify-center'> Ver detalle </Link>
            </footer>
            
        </div>
        
    )
}

export default Item