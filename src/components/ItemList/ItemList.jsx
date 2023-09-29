import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className='grid gap-3 grid-cols-4 grid-rows-3 sm:cols-3'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList