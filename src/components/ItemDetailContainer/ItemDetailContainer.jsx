
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

import { doc, getDoc} from 'firebase/firestore'
import { db } from '../service/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
 
    useEffect(() => {
        
        const docRef = doc(db, 'Productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [itemId])


    return (
        <div className='ItemDetailContainer flex items-center justify-center pt-4'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;