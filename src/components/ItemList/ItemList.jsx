import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className='grid gap-3 grid-cols-5 grid-rows-5'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList