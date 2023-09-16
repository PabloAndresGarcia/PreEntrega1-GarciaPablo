
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className='items-center justify-center'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList